import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle
} from '@ionic/angular/standalone';
import { TripServiceService } from '../services/trip-service.service';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle,
    CommonModule, FormsModule, ]
})
export class HomePage implements OnInit {

  constructor(
    public tripService: TripServiceService,
  ) { }

  ngOnInit() {
  }

  createTrip(){
    console.log(this.tripService.onTrip);
    this.tripService.createTrip();
    console.log(this.tripService.onTrip);
  }

  addNewTrip() {
    const journeyName = prompt('Enter journey name:');

    if (journeyName) {
      const currentDate = new Date();
      const dateStarted = currentDate.toISOString().split('T')[0];
      const newTrip = new Trip(journeyName, true, [], [], dateStarted, false);
      this.tripService.addTrip(newTrip);
    }

    this.createTrip();
  }

  getCurrentTrip() {
    return this.tripService.allTrips.find(trip => trip.currentTrip === true);
  }

}
