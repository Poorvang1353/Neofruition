import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
// import {GoogleCharts} from 'google-charts';
import { BnNgIdleService } from 'bn-ng-idle';
import { DynamicChartService } from './dynamic-chart.service';

declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './livedashboard.component.html',
  styleUrls: ['./livedashboard.component.css']
})
export class livedashboardComponent implements OnInit {
  constructor(private router: Router, private bnIdle: BnNgIdleService, private getchart: DynamicChartService) { }
  // data:number[];
  renewal: any;
  subscription: any;
  ngOnInit() {
    this.getchart.getallchart().subscribe((response: any) => {
      if(response && response.dataList){
        this.drawchart(response.dataList);
      }
    })

    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawchart);

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawVisualization);

    this.bnIdle.startWatching(50).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
        console.log('session expired');
        this.router.navigate(['']);
        this.bnIdle.stopTimer();
      }
    })
  }

  getFormmatedDate(date: string | number | Date){
    const months = ["january", "February","March", "April","June"];
    const dt = new Date(date);
    return months[dt.getMonth()] + "-" + dt.getFullYear();
  }

  drawchart(dataList: any):void {
    var chartMap = [['Month','Subscription','Renewal']];
    for(let data of dataList){
      chartMap.push([this.getFormmatedDate(data.date),data.newSubsCount,data.renewalSubsCount]);
    }
    var data = google.visualization.arrayToDataTable(chartMap);

    var options = {
      legend: { position: 'top' },
      chart: {

        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
      vAxis: {
        title: 'count'
      },
      hAxis: {
        title: 'Month'
      },
      width: 500,
      height: 200,
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('divPiechart'));
    chart.draw(data, options);
  }

  drawVisualization() {
    // Some raw data (not necessarily accurate)
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05', 165, 938, 522, 998, 450, 614.6],
      ['2005/06', 135, 1120, 599, 1268, 288, 682],
      ['2006/07', 157, 1167, 587, 807, 397, 623],
      ['2007/08', 139, 1110, 615, 968, 215, 609.4],
      ['2008/09', 136, 691, 629, 1026, 366, 569.6]
    ]);

    var options = {
      title: 'Monthly Production by Country',
      hAxis: { title: 'Month' },
      seriesType: 'bars',
      series: { 5: { type: 'line' } },
      width: 500,
      height: 200,
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  chart: any;
  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('')
  }

  register() {
    this.router.navigateByUrl('registration');
  }
  board() {
    this.router.navigate(['casedashboard']);
  }

}