import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
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

  ngOnInit() {
    this.getchart.getallchart().subscribe((response: any) => {
      if (response && response.dataList) {
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

  getFormmatedDate(date: string | number | Date) {
    const months = ["january", "February", "March", "April", "June"];
    const dt = new Date(date);
    return months[dt.getMonth()] + "-" + dt.getFullYear();
  }

  drawchart(dataList: any): void {
    var chartMap = [['Month', 'Subscription', 'Renewal']];
    for (let data of dataList) {
      chartMap.push([this.getFormmatedDate(data.date), data.newSubsCount, data.renewalSubsCount]);
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
    var data = google.visualization.arrayToDataTable([
      ['Element', 'Renewal', { role: 'style' }],
      ['feb', 7000, '#b87333'],            // RGB value
      ['march', 10000, 'silver'],            // English color name
      ['april', 10000, 'gold'],
      ['may', 39000, 'color: #e5e4e2; stroke-width: 8; stroke-opacity: 0.6']
    ]);

    let el: any = document.getElementById("divColoumnChart");
    var chart = new google.visualization.ColumnChart(el)
    var options: any = {
      title: 'Renewal projection',
      legend: { position: 'top' },
      width: 500,
      height: 200,
      bar: { groupWidth: "50%" },
    };
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