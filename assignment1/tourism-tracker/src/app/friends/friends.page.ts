import { Component } from '@angular/core';
import {
  IonHeader, IonContent, IonTitle, IonToolbar,
} from '@ionic/angular/standalone'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonContent, IonTitle, IonToolbar,
  ]
})
export class FriendsPage {

  constructor() { }

}
