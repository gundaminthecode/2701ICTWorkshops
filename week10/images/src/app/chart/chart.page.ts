import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Chart } from 'chart.js/auto';
import { ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton, IonGrid, IonRow, IonCol} from '@ionic/angular/standalone';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton, CommonModule, FormsModule, IonGrid, IonRow, IonCol]
})
export class ChartPage implements OnInit {

  constructor(private readonly elementRef: ElementRef) { 
    this.canvas = elementRef;
  }

  @ViewChild('healthChart', {static:true}) canvas: ElementRef;
  chart: any;
  labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  data: number[] = [300, 22, 234, 635, 810, 328, 120];
  newLabel: string = "";
  newNumber: number = 0;

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Average Steps Taken',
          data: this.data,
        }]
      },
    });
  }

  addData() {
    if (this.newNumber !== undefined && !isNaN(this.newNumber) && this.newLabel !== '') {
      this.data.push(Number(this.newNumber));
      this.labels.push(this.newLabel);
      this.chart.data.labels = this.labels;
      this.chart.data.datasets[0].data = this.data;
      this.chart.update();
      this.newNumber = 0; // Clear the input field after adding the number
      this.newLabel = ''; // Clear the input field after adding the label
    }
  }

}
