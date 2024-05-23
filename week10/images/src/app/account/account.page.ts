import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton, IonLabel, IonAvatar, IonBackButton, IonButtons,} from '@ionic/angular/standalone';

import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton, CommonModule, FormsModule, IonLabel, IonAvatar, IonBackButton, IonButtons]
})
export class AccountPage implements OnInit, OnDestroy {

  usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  username$: Observable<string> = this.usernameSubject.asObservable();
  routeParamsSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to route params changes
    this.routeParamsSubscription = this.route.params.subscribe((params: Params) => {
      // Retrieve the username from route params
      const username = params['username'] ?? "";
      // Update the username subject
      this.usernameSubject.next(username);
    });
  }

  ngOnDestroy() {
    // Unsubscribe from route params changes to avoid memory leaks
    if (this.routeParamsSubscription) {
      this.routeParamsSubscription.unsubscribe();
    }
  }

}
