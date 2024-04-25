import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-view-trip-modal',
  templateUrl: './view-trip-modal.page.html',
  styleUrls: ['./view-trip-modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ViewTripModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
