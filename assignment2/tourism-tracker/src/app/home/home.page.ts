import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonList,
  IonLabel, IonInput,
} from '@ionic/angular/standalone';
import { TripServiceService } from '../services/trip-service.service';
import { Trip } from '../models/trip.model';
import { ModalController } from '@ionic/angular';
import { MapSelectorModalPage } from '../modals/map-selector-modal/map-selector-modal.component';
import { MarkerServiceService } from '../services/marker-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonList,
    IonLabel, IonInput,
    FormsModule, CommonModule
  ],
  providers: [ModalController]
})
export class HomePage implements OnInit {

  newLocation: string = "";
  newLocationDate: string = "";

  constructor(
    public tripService: TripServiceService,
    private modalController: ModalController,
    private markerService: MarkerServiceService,
  ) {
    
   }

  ngOnInit() {
    this.newLocation = '';
    this.newLocationDate = '';
  }

  createTrip(){
    //console.log(this.tripService.onTrip);
    // lets tripService know that the user has created a new trip
    this.tripService.createTrip();
    //console.log(this.tripService.onTrip);
  }

  addNewTrip() {
    // should probs update with a modal or a nicer way instead of a prompt
    const journeyName = prompt('Enter journey name:');

    if (journeyName) {
      const currentDate = new Date();
      const dateStarted = currentDate.toISOString().split('T')[0];// remove time from date
      const newTrip = new Trip(journeyName, true, [], [], [], dateStarted, false); // preliminary values
      this.tripService.addTrip(newTrip); // push new trip to allTrips
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

   getCurrentTripLocationLatLngs(index: number): string | undefined {
    const currentTrip = this.getCurrentTrip();
    if (currentTrip && currentTrip.locationLatLngs) {
       return currentTrip.locationLatLngs[index];
    }
    return undefined;
   }

  // get inputed data and push to location fields 
  addLocation() {
    if (this.newLocation.trim()) {
      this.getCurrentTrip()?.locations.push(this.newLocation.trim());
      this.getCurrentTrip()?.locationDates.push(this.newLocationDate);
      this.getCurrentTrip()?.locationLatLngs.push(this.markerService.markerLatLng);
      this.newLocation = '';
      this.newLocationDate = '';
    }
  }

  removeLocation(index: number) {
    this.getCurrentTrip()?.locations.splice(index, 1);
    this.getCurrentTrip()?.locationDates.splice(index, 1);
  }

  // open mapSelector modal
  async mapSelector() {
    const modal = await this.modalController.create({
      component: MapSelectorModalPage,
      cssClass: 'map-selector-modal',
    });
    return await modal.present();
  }

}
