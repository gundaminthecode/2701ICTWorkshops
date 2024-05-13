import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { logInOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, RouterLink, FormsModule]
})
export class Tab2Page implements OnInit {

  username: string = '';
  Count: number = 0;

  constructor( private router: Router) {
    addIcons({ logInOutline });
  }

  incrementCounter(){
    this.Count += 1;
  }

  login() {
    this.incrementCounter();
    this.router.navigate(['/account', this.username]);
  }

  ngOnInit(): void {
    
  }

}