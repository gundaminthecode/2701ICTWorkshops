import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Trip } from 'src/app/models/trip.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-trip-modal',
  templateUrl: './edit-trip-modal.component.html',
  styleUrls: ['./edit-trip-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCheckbox, IonCardContent, IonLabel,
    FormsModule, CommonModule
  ]
})
export class EditTripModalComponent  implements OnInit {

  @Input() trip: Trip | null = null;

  journeyName: string = "";
  currentTrip: boolean = false;
  locations: string[] = [];
  locationDates: string[] = [];
  dateStarted: string = "";
  complete: boolean = false;
  dateEnded: string = "";

  newLocation: string = "";
  newLocationDate: string = "";

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if (this.trip) {
      this.journeyName = this.trip.journeyName;
      this.currentTrip = this.trip.currentTrip;
      this.locations = this.trip.locations;
      this.locationDates = this.trip.locationDates;
      this.dateStarted = this.trip.dateStarted;
      this.complete = this.trip.complete;
      this.dateEnded = this.trip.dateEnded || ''; 
    }
  }

  addLocation() {
    if (this.newLocation.trim()) {
      this.locations.push(this.newLocation.trim());
      this.locationDates.push(this.newLocationDate);
      this.newLocation = '';
    }
  }

  removeLocation(index: number) {
    this.locations.splice(index, 1);
    this.locationDates.splice(index, 1);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  updateJourney() {
    if (this.trip) {
      this.trip.journeyName = this.journeyName;
      this.trip.currentTrip = this.currentTrip;
      this.trip.locations = this.locations;
      this.trip.locationDates = this.locationDates;
      this.trip.dateStarted = this.dateStarted;
      
      if (this.complete) {
        this.trip.complete = true;
        this.trip.currentTrip = false; // Set currentTrip to false if complete is true
      } else {
        this.trip.complete = false;
      }
      
      this.trip.dateEnded = this.dateEnded;
  
      // Dismiss the modal and pass the updated trip data back to the calling component
      this.modalController.dismiss(this.trip);
    }
  }
  
}
