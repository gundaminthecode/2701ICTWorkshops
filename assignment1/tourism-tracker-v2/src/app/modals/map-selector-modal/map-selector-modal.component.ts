import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel
} from '@ionic/angular/standalone';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-selector-modal',
  templateUrl: './map-selector-modal.component.html',
  styleUrls: ['./map-selector-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCheckbox, IonCardContent, IonLabel,
    FormsModule, CommonModule
  ]
})
export class MapSelectorModalPage {
  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  submitModal() {
    // Handle submit logic here
    this.modalController.dismiss();
  }
}
