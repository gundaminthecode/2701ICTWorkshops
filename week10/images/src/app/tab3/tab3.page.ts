import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, FormsModule, CommonModule, IonButton],
})
export class Tab3Page {
  name: string = "";
  showNotifications: boolean = false;
  reminder: string = "0001-01-01T00:01";

  updatedName: string = "";
  updatedShowNotifications: boolean = false;
  updatedReminder: string = "0001-01-01T00:01";

  imageFile: string = "";

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.loadSettings();
  }

  ionViewDidEnter() {
    this.loadImage();
  }

  loadSettings() {
    this.storage.get('name').then(val => {
      this.name = val;
    });
    this.storage.get('showNotifications').then(val => {
      this.showNotifications = val;
    });
    this.storage.get('reminder').then(val => {
      this.reminder = val;
    });
  }

  async updateSettings() {
    this.updatedName = this.name;
    await this.storage.set('name', this.updatedName);
    this.updatedShowNotifications = this.showNotifications;
    await this.storage.set('showNotifications', this.updatedShowNotifications);
    this.updatedReminder = this.reminder;
    await this.storage.set('reminder', this.updatedReminder);
    console.log("saved");
  }

  async imageSelected(files: any) {
    let fileReader = new FileReader();

    fileReader.onload = async () => {
      const result = fileReader.result;
      if (typeof result === 'string') {
        this.imageFile = result;
        await this.storage.set('imageFile', result);
      } else {
        console.error("FileReader result is not a string");
      }
    };
    fileReader.readAsDataURL(files[0]);
  }

  async loadImage() {
    this.imageFile = await this.storage.get('imageFile') || "";
  }
}
