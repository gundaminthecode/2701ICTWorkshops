import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

export class Contact {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, ExploreContainerComponent, CommonModule],
})

export class Tab1Page {
  
  contacts: Contact[] = [
    new Contact('Fran', 'Jipani', 'f.jipani@griffith.edu.au'),
    new Contact('John', 'Smith', 'j.smith@griffith.edu.au')
  ];

  constructor() {}
}
