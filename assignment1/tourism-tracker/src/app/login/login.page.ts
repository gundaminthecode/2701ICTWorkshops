import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  Count: number = 0;

  constructor(private router: Router, private authservice: AuthService) {
    addIcons({ logInOutline });
  }

  incrementCounter(){
    this.Count += 1;
  }

  login() {
    this.incrementCounter();
    console.log(this.authservice.isLoggedIn);
    this.authservice.isLoggedIn = true;
    console.log(this.authservice.isLoggedIn);
    console.log(this.username);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    
  }
}

