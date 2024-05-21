import { Injectable } from '@angular/core';
import { Trip } from '../models/trip.model';

@Injectable({
  providedIn: 'root'
})

export class TripServiceService {

  onTrip = false;

  constructor() { }

  // generate temporary filler trips
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

  // create new trip and set tell app that user is on a trip
  createTrip(){
    this.onTrip = true;
  }

  // check if onTrip exists
  tripExists(): boolean {
    return this.onTrip;
  }

  // when creating new trip, add to list of allTrips
  addTrip(newTrip: Trip) {
    this.allTrips.push(newTrip);
  }

  // update trip with new info
  updateTrip(updatedTrip: Trip) {
    const index = this.allTrips.findIndex(trip => trip.journeyName === updatedTrip.journeyName && trip.dateStarted === updatedTrip.dateStarted); // check if trip being passed is the same as existing trip
    if (index !== -1) { //checks if index is valid
      this.allTrips[index] = updatedTrip;
    }
  }
  
}
