import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, IonItemOptions, IonItemOption, IonItem, IonList, IonItemSliding 
} from '@ionic/angular/standalone';

export class Trip {
  constructor(
    public journeyName: string, 
    public locations: string[], 
    public locationDates: string[],
    public dateStarted: string, 
    public complete: boolean,
    public dateEnded?: string,
  ) {}
}

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

  allTrips: Trip[] = [
    new Trip(
      'Europe', 
      ['Location 1', 'Location 2', 'Location 3'], 
      ['2024-01-01', '2024-01-02', '2024-01-03'], 
      '2024-01-01', 
      true, 
      '2024-01-03'
    ),
    new Trip(
      'America', 
      ['Location 1', 'Location 2', 'Location 3'], 
      ['2024-02-01', '2024-02-02', '2024-02-03'], 
      '2024-02-01', 
      true, 
      '2024-02-03'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

}
