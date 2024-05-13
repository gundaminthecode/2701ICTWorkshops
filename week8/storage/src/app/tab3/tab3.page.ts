import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonInput, IonToggle, IonItem, IonList, IonDatetimeButton, IonModal, IonDatetime, FormsModule],
})
export class Tab3Page {

  name: string = "";

  constructor(private storage: Storage) {
    this.init();
    storage.get('name').then(val => {
      this.name = val;
    })
  }

  async init(){
    const storage = await this.storage.create();
  }
}
