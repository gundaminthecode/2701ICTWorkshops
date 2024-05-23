import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonFooter 
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MarkerServiceService } from 'src/app/services/marker-service.service';

declare let google: any;

@Component({
  selector: 'app-map-selector-modal',
  templateUrl: './map-selector-modal.component.html',
  styleUrls: ['./map-selector-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonFooter, FormsModule, CommonModule,
  ]
})
export class MapSelectorModalPage implements AfterViewInit {
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  @Input() defaultLatLng: string | null = null;
  map: any;
  previousMarker: any = null;
  showSubmitButton: boolean = false;

  constructor(
    private modalController: ModalController,
    private elementRef: ElementRef,
    private markerService: MarkerServiceService,
  ) {
    this.mapElement = elementRef;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  submitModal() {
    this.modalController.dismiss();
  }

  ngAfterViewInit(): void {
    this.initMap();

    google.maps.event.addListener(this.map, 'click', (event: { latLng: any }) => {
      this.placeMarker(event.latLng);
    });
  }

  placeMarker(location: any) {
    if (this.previousMarker) {
      this.previousMarker.setMap(null); // Remove the previous marker from the map
    }
  
    const marker = new google.maps.Marker({
      position: location,
      map: this.map,
    });
  
    this.previousMarker = marker; // Update the reference to the new marker
  
    const infowindow = new google.maps.InfoWindow({
      content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    });
    this.markerService.markerLatLng = [location.lat(), location.lng()];
    infowindow.open(this.map, marker);
  }

  initMap() {
    let latLng;
    if (this.defaultLatLng) {
      this.showSubmitButton = false;
      const [lat, lng] = this.defaultLatLng.split(',').map(coord => parseFloat(coord.trim()));
      latLng = new google.maps.LatLng(lat, lng);
    } else {
      this.showSubmitButton = true;
      latLng = new google.maps.LatLng(-27.5522951875278, 153.05107960000726);
    }
    
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    if (this.defaultLatLng) {
      this.placeMarker(latLng);
    }
  }
}
