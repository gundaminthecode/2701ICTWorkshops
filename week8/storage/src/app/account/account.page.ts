// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { ActivatedRoute } from '@angular/router';

// import { Observable } from 'rxjs';
// import { map } from 'rxjs';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.page.html',
//   styleUrls: ['./account.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule]
// })
// export class AccountPage implements OnInit {

//   //username: string = '';
//   username: Observable<string> | undefined;

//   constructor(private route: ActivatedRoute) { }

//   ngOnInit() {
//     //this.username = this.route.snapshot.paramMap.get('username') ?? "";
//     this.username = this.route.paramMap.pipe(
//       map(paramMap => paramMap.get('username') ?? "")
//     )
//   }

// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
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
