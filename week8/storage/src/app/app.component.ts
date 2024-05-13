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
  showNotifications: boolean = true;
  reminder: string = "2001-11-22T19:45";

  constructor(private storage: Storage) {
    this.defaultSettings()
  }

  async defaultSettings(){
    try {
      await this.storage.create();
      // Check if settings already exist
      const name = await this.storage.get('name');
      const showNotifications = await this.storage.get('showNotifications');
      const reminder = await this.storage.get('reminder');
  
      // If settings don't exist, set default values
      if (!name && !showNotifications && !reminder) {
        await this.storage.set("name", this.name);
        await this.storage.set("showNotifications", this.showNotifications);
        await this.storage.set("reminder", this.reminder);
      }
    } catch (error) {
      console.error("Error setting default settings:", error);
    }
  }
  

}
