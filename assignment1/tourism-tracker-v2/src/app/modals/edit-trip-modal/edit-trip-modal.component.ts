import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Trip } from 'src/app/models/trip.model';


@Component({
  selector: 'app-edit-trip-modal',
  templateUrl: './edit-trip-modal.component.html',
  styleUrls: ['./edit-trip-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard,
    FormsModule,
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

  dismiss() {
    this.modalController.dismiss();
  }

  updateJourney() {
    const updatedTrip: Trip = {
      journeyName: this.journeyName,
      currentTrip: this.currentTrip,
      locations: this.locations,
      locationDates: this.locationDates,
      dateStarted: this.dateStarted,
      complete: this.complete,
      dateEnded: this.dateEnded
    };
    this.modalController.dismiss(updatedTrip);
  }

}
