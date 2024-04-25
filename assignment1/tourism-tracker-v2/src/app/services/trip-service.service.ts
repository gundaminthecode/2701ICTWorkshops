import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})

export class TripServiceService {

  onTrip = false;

  constructor() { }

  allTrips: Trip[] = [
    new Trip(
      'Europe', 
      false,
      ['Location 1', 'Location 2', 'Location 3'], 
      ['2024-01-01', '2024-01-02', '2024-01-03'], 
      '2024-01-01', 
      true, 
      '2024-01-03'
    ),
    new Trip(
      'America', 
      false,
      ['Location 1', 'Location 2', 'Location 3'], 
      ['2024-02-01', '2024-02-02', '2024-02-03'], 
      '2024-02-01', 
      true, 
      '2024-02-03'
    ),
  ];

  createTrip(){
    this.onTrip = true;
  }

  tripExists(): boolean {
    return this.onTrip;
  }

  addTrip(newTrip: Trip) {
    this.allTrips.push(newTrip);
  }
}
