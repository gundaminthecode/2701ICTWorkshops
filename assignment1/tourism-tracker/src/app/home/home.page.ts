import { Component } from '@angular/core';
import { UsernameService } from '../username.service';
import { 
  IonHeader, IonContent, IonTitle, IonToolbar, 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonContent, IonTitle, IonToolbar, 
  ]
})
export class HomePage {
  username = this.usernameService.username;

  constructor(private usernameService: UsernameService) {}

}
