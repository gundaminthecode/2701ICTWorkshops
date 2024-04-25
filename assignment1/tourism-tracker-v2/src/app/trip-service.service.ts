import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  onTrip = false;

  constructor() { }

  createTrip(){
    this.onTrip = true;
  }

  tripExists(): boolean {
    return this.onTrip;
  }
}
