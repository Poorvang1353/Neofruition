import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
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
  constructor(private router: Router) { }
  logout() {
    localStorage.removeItem('data')
    this.router.navigateByUrl('')
  }

  title = 'Browser market shares at a specific website, 2014';
  type = 'PieChart';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400;
  // autologout(){
  //   setTimeout(() => {
  //     this.logout();
  //     console.log('wait for 3 second ')
  //   }, 3000);
  // }
}
