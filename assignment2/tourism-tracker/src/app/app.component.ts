import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Credentials } from './models/credentials.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  credentials: Credentials = new Credentials('username', 'password')

  constructor(private storage: Storage) {
    this.setDefaultCredentials();
  }

  async setDefaultCredentials() {
    try {
      await this.storage.create();
      const username = await this.storage.get('username');
      const password = await this.storage.get('password');

      if (!username && !password) {
        await this.storage.set('username', this.credentials.username);
        await this.storage.set('password', this.credentials.password);
      }
    } catch (error) {
      console.error('Error Setting Default Credentials:', error);
    }
  }
}
