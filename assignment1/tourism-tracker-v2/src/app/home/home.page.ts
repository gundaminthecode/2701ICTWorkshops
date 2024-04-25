import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent
} from '@ionic/angular/standalone';
import { TripServiceService } from '../trip-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardHeader, IonCardContent,
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

}
