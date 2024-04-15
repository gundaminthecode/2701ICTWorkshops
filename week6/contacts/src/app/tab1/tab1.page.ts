import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

import { ModalController } from '@ionic/angular';
import { AddContactModalComponent } from '../add-contact-modal/add-contact-modal.component';

export class Contact {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, ExploreContainerComponent, CommonModule, IonItemSliding, IonItemOptions, IonItemOption],
  providers: [ModalController]
})

export class Tab1Page {

  contacts: Contact[] = [
    new Contact('Fran', 'Jipani', 'f.jipani@griffith.edu.au'),
    new Contact('John', 'Smith', 'j.smith@griffith.edu.au')
  ];

  constructor( private modalController: ModalController) {
    addIcons({ add });
  }

  async openAddContactModal(){
    const modal = await this.modalController.create({
      component: AddContactModalComponent
    });
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        const contactData = data.data;
        this.addContact(contactData);
      }
    });
    return await modal.present();
  }

  addContact(contactData: {firstName: string, lastName: string, email: string}) {
    const newContact = new Contact(contactData.firstName, contactData.lastName, contactData.email)
    this.contacts.push(newContact);
  }

  deleteContact(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1); // Remove the contact from the array
    }
  }
}
