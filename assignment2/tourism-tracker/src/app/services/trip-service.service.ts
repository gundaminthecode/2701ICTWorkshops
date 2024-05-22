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
      ['Copenhagen 1', 'Oslo 2', 'Stockholm 3'], 
      ['2024-01-01', '2024-01-02', '2024-01-03'], 
      ['55.676098, 12.568337', '59.911491, 10.757933', '59.3293, 18.0686'],
      '2024-01-01', 
      true, 
      '2024-01-03'
    ),
    new Trip(
      'America', 
      false,
      ['New York 1', 'Los Angeles 2', 'Washington DC 3'], 
      ['2024-02-01', '2024-02-02', '2024-02-03'],
      ['40.7128, 74.0060', '34.0549, 118.2426', '38.9072, 77.0369'], 
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
