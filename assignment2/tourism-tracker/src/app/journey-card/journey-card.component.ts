import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItemOption, IonItemOptions
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AllTripsPage } from '../all-trips/all-trips.page';
import { Trip } from '../models/trip.model';
import { TripServiceService } from '../services/trip-service.service';
import { addIcons } from 'ionicons';
import { chevronDown, chevronUp } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItemOption, IonItemOptions,
    FormsModule, CommonModule
  ]
})
export class JourneyCardComponent {
  @Input() journeyName!: string;
  @Input() journeyNumber!: number;
  @Input() locationsVisited!: number;
  @Input() trip!: any;

  dropdownVisible = false;
  imagesDropdownVisible = false;

  constructor(
    private allTripsPage: AllTripsPage,
    private tripService: TripServiceService,
    private alertController: AlertController
  ) {
    addIcons({ chevronDown, chevronUp });
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  toggleImagesDropdown() {
    this.imagesDropdownVisible = !this.imagesDropdownVisible;
  }

  editTrip(trip: Trip){
    this.allTripsPage.editTrip(trip)
  }

  deleteTrip(trip: Trip){
    this.tripService.removeTrip(trip)
  }

  async shareTrip() {
    const alert = await this.alertController.create({
      header: 'Share',
      message: 'Shared Successfully!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
