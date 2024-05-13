import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,],
})
export class AppComponent {

  name: string = "Nick";

  constructor(private storage: Storage) {
    this.defaultSettings()
  }

  async defaultSettings(){
    try {
      await this.storage.create();
      await this.storage.set("name", this.name);
    } catch (error) {
      console.error("Error setting default settings:", error);
    }
  }

}
