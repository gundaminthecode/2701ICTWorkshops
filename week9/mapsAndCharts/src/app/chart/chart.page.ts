import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Chart } from 'chart.js/auto';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChartPage implements OnInit {

  constructor(private readonly elementRef: ElementRef) { 
    this.canvas = elementRef;
  }

  @ViewChild('healthChart', {static:true}) canvas: ElementRef;
  chart: any;

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: 'Average Steps Taken',
          data: [300, 22, 234, 635, 810, 328, 120],
        }]
      },
    });
  }


}
