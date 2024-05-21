import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonItemOptions, IonItemOption, IonItem, IonList, IonItemSliding 
} from '@ionic/angular/standalone';
import { TripServiceService } from '../services/trip-service.service';
import { Trip } from '../models/trip.model';

import { EditTripModalComponent } from '../modals/edit-trip-modal/edit-trip-modal.component';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.page.html',
  styleUrls: ['./all-trips.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonToolbar, IonItemOptions, IonItemOption, IonItem, IonList, IonItemSliding,
    CommonModule, FormsModule
  ],
  providers: [ModalController],
})
export class AllTripsPage implements OnInit {

  constructor(private tripService: TripServiceService, private modalController: ModalController) { }

  allTrips = this.tripService.allTrips;

  ngOnInit() {
    //console.log(this.allTrips);
  }

  viewTrip(){

  }

  async editTrip(trip: Trip) {
    const modal = await this.modalController.create({
      component: EditTripModalComponent,
      componentProps: {
        trip: trip // pass any nessecary data to edit trip
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      // update trip with edited info with close of modal
      this.tripService.updateTrip(data);
    }
  }

  deleteTrip(){

  }

}
