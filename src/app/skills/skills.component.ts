import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  public barChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels1 = ['HTML', 'CSS', 'Javascript', 'C++', 'Java'];
  public barChartType1 = 'bar';
  public barChartLegend1 = true;
  public barChartData1 = [
    {data: [6, 6, 4, 8, 6, 0, 10], label: 'CORE (y axis represents experience in years)'}
  ];

  public barChartOptions2 = {
    scaleShowVerticalLines: true,
    responsive: true,
    maintainAspectRatio: false,
  };
  public barChartLabels2 = ['Angular', 'React.js', 'PrimeNg', 'Protractor'];
  public barChartType2 = 'bar';
  public barChartLegend2 = true;
  public barChartData2 = [
    {data: [2, 0.5, 2, 1.5, 0, 3], label: 'ADVANCE (y axis represents experience in years)'}
  ];

  ngOnInit(): void {
  }

}
