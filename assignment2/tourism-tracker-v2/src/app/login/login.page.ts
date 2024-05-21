import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports : [
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, FormsModule
  ]
})
export class LoginPage implements OnInit {

  username: string = '';
  Count: number = 0;

  constructor(
    private router: Router, 
    private loginService: LoginService,
  ) {
    addIcons({ logInOutline });
  }

  //login attempts
  incrementCounter(){
    this.Count += 1;
  }

  login() {
    this.incrementCounter();
    this.loginService.login(); // tell app that user is logged in
    this.router.navigate(['']); // redirect to home page
  }

  ngOnInit(): void {
    
  }
}

