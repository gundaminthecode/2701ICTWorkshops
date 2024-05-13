import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ElementRef } from '@angular/core';

declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MapPage implements OnInit {

  constructor(private readonly elementRef: ElementRef) { 
    this.mapElement = elementRef;
  }

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;

  ngOnInit() {
    console.log('ngOnInit MapPage');

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

}
