import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonItemOptions, IonItemOption, IonItem, IonList, IonItemSliding 
} from '@ionic/angular/standalone';
import { TripServiceService } from '../trip-service.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.page.html',
  styleUrls: ['./all-trips.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonToolbar, IonItemOptions, IonItemOption, IonItem, IonList, IonItemSliding,
    CommonModule, FormsModule]
})
export class AllTripsPage implements OnInit {

  constructor(private tripService: TripServiceService) { }

  allTrips = this.tripService.allTrips;

  ngOnInit() {
    //console.log(this.allTrips);
  }

}
