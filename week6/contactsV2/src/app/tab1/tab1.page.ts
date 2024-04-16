import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

// icons
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

// modal
import { ModalController } from '@ionic/angular';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

export class Contact {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonButton, IonIcon,
    ExploreContainerComponent, CommonModule],
  providers: [ModalController]
})

export class Tab1Page {
  
  contacts: Contact[] = [
    new Contact('Fran', 'Jipani', 'f.jipani@griffith.edu.au'),
    new Contact('John', 'Smith', 'j.smith@griffith.edu.au')
  ];

  constructor(private modalController: ModalController) {
    addIcons({add});
  }

  async openContactModal(){
    console.log("hi")
    const modal = await this.modalController.create({
      component: ContactModalComponent
    });

    modal.onDidDismiss().then(data => {
      if (data && data.data) {
        const contactData = data.data;
        this.addContact(contactData);
      }
    });

    return await modal.present();
  }

  addContact(contactData: any){
    if (contactData){
      const {firstName, lastName, email} = contactData;
      const newContact = new Contact (firstName, lastName, email);
      this.contacts.push(newContact)
    }
  }
}
