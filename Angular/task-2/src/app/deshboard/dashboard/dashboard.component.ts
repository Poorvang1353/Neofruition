import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private bnIdle:BnNgIdleService) { }

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
    this.bnIdle.startWatching(10).subscribe((isTimeOut:boolean)=>{
      if(isTimeOut){
        console.log('session expired');
        this.router.navigate(['']);
        this.bnIdle.stopTimer();
      }
    })


  }
  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Subscription', 'Renewal'],
      ['January-2023', 18, 51],

    ]);

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
  chart: any;
  logout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('')
  }


}


