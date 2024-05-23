import { Component, OnInit, Input } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonCard, IonCardContent, IonCheckbox, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle,
    FormsModule, CommonModule,
  ]
})
export class LocationCardComponent {
  @Input() locationName!: string;
  @Input() visitDate!: string;
  @Input() lat!: number;
  @Input() lng!: number;

  constructor() { }

  get mapUrl() {
    return `https://www.google.com/maps?q=${this.lat},${this.lng}`;
  }

}
