import { Component } from '@angular/core';

import { addIcons } from 'ionicons';
import { airplane, person, people, home } from 'ionicons/icons';

import { 
  IonHeader, IonContent, IonTitle, IonToolbar, IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonContent, IonTitle, IonToolbar, IonLabel, IonIcon, IonTabButton, IonTabs, IonTabBar
  ]
})
export class TabsPage {

  constructor() {
    addIcons({ airplane, person, people, home });
  }

}
