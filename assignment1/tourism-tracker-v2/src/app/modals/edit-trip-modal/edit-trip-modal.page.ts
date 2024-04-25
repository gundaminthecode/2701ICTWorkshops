import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-edit-trip-modal',
  templateUrl: './edit-trip-modal.page.html',
  styleUrls: ['./edit-trip-modal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditTripModalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
