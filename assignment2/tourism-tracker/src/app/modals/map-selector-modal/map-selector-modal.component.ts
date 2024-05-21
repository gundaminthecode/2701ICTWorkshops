import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel,
  IonFooter 
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare let google: any;

@Component({
  selector: 'app-map-selector-modal',
  templateUrl: './map-selector-modal.component.html',
  styleUrls: ['./map-selector-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCheckbox, IonCardContent, IonLabel,
    IonFooter, FormsModule, CommonModule,
  ]
})
export class MapSelectorModalPage implements OnInit {
  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map: any;

  constructor(
    private modalController: ModalController,
    private readonly elementRef: ElementRef,
  ) {
    this.mapElement = elementRef;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  submitModal() {
    this.modalController.dismiss();
  }

  ngOnInit(): void {
    const latLng = new google.maps.LatLng(-27.5522951875278, 153.05107960000726);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    const infoWindow = new google.maps.InfoWindow({
      content: '<h4>Nathan Campus</h4>'
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
