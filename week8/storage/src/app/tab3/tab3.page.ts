import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, FormsModule, IonButton],
})
export class Tab3Page {

  name: string = "";
  showNotifications: boolean = false;
  reminder: string = "0001-01-01T00:01";

  updatedName: string = "";
  updatedShowNotifications: boolean = false;
  updatedReminder: string = "0001-01-01T00:01";

  constructor(private storage: Storage) {
    this.init();
    
  }

  async init(){
    const storage = await this.storage.create();
    this.loadSettings();
  }

  loadSettings(){
    this.storage.get('name').then(val => {
      this.name = val;
    })
    this.storage.get('showNotifications').then(val => {
      this.showNotifications = val;
    })
    this.storage.get('reminder').then(val => {
      this.reminder = val;
    })
  }

  async updateSettings(){
    this.updatedName = this.name;
    //console.log(this.updatedName);
    await this.storage.set('name', this.updatedName);
    this.updatedShowNotifications = this.showNotifications;
    await this.storage.set('showNotifications', this.updatedShowNotifications);
    this.updatedReminder = this.reminder;
    await this.storage.set('reminder', this.updatedReminder);
    console.log("saved");
  }
}
