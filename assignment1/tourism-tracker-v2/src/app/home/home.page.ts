import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonList,
  IonLabel, IonInput,
} from '@ionic/angular/standalone';
import { TripServiceService } from '../services/trip-service.service';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonList,
    IonLabel, IonInput,
    FormsModule, CommonModule
  ]
})
export class HomePage implements OnInit {

  newLocation: string = "";
  newLocationDate: string = "";

  constructor(
    public tripService: TripServiceService,
  ) {
    
   }

  ngOnInit() {
    this.newLocation = '';
    this.newLocationDate = '';
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

  getCurrentTripLocationDates(index: number): string | undefined {
    const currentTrip = this.getCurrentTrip();
    if (currentTrip && currentTrip.locationDates) {
       return currentTrip.locationDates[index];
    }
    return undefined;
   }

  addLocation() {
    if (this.newLocation.trim()) {
      this.getCurrentTrip()?.locations.push(this.newLocation.trim());
      this.getCurrentTrip()?.locationDates.push(this.newLocationDate);
      this.newLocation = '';
    }
  }

  removeLocation(index: number) {
    this.getCurrentTrip()?.locations.splice(index, 1);
    this.getCurrentTrip()?.locationDates.splice(index, 1);
  }

  mapSelector(){
    
  }

}
