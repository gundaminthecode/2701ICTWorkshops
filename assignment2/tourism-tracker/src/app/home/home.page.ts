import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonItem, IonList,
  IonLabel, IonInput,
} from '@ionic/angular/standalone';
import { TripServiceService } from '../services/trip-service.service';
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
  ) {}
  
  ngOnInit() {
    this.tripService.initialiseStorage();
    this.newLocation = '';
    this.newLocationDate = '';
  }

  ionViewWillEnter() {
    // Call any necessary methods to refresh data when the view is about to be entered
    this.refreshData();
  }

  async refreshData() {
    await this.tripService.initialiseStorage(); // Refresh the data from storage
  }

  createTrip(){
    this.tripService.createTrip();
  }

  addNewTrip() {
    this.tripService.addNewTrip();
  }

  getCurrentTripLocationDates(index: number): string | undefined {
    const currentTrip = this.tripService.getCurrentTrip();
    if (currentTrip && currentTrip.locationDates) {
       return currentTrip.locationDates[index];
    }
    return undefined;
   }

   getCurrentTripLocationLatLngs(index: number): string | undefined {
    const currentTrip = this.tripService.getCurrentTrip();
    if (currentTrip && currentTrip.locationLatLngs) {
       return currentTrip.locationLatLngs[index];
    }
    return undefined;
   }

  // get inputed data and push to location fields 
  addLocation() {
    if (this.newLocation.trim()) {
      const markerLatLng = this.markerService.markerLatLng(); // Get marker's LatLng from TripServiceService
      this.tripService.addLocation(this.newLocation.trim(), this.newLocationDate, markerLatLng);
      this.newLocation = '';
      this.newLocationDate = '';
    }
  }

  removeLocation(index: number) {
    this.tripService.removeLocation(index);
  }

  // open mapSelector modal
  async mapSelector(defaultLatLng: string | null = null) {
    const modal = await this.modalController.create({
      component: MapSelectorModalPage,
      cssClass: 'map-selector-modal',
      componentProps: { defaultLatLng }
    });
    return await modal.present();
  }

  viewLocation(index: number) {
    const latLng = this.getCurrentTripLocationLatLngs(index);
    this.mapSelector(latLng);
  }
}
