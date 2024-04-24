import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.page.html',
  styleUrls: ['./all-trips.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AllTripsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
