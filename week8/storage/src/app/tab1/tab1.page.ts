import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

// icons
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

// modal
import { ModalController } from '@ionic/angular';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

// Define a Contact class to represent contact information
export class Contact {
  constructor(public firstName: string, public lastName: string, public email: string) {}
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true, // Indicates that this component can be used independently
  imports: [
    // Import necessary Ionic components and CommonModule
    IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonList, IonButton, IonIcon, IonItemSliding, IonItemOption, IonItemOptions,
    ExploreContainerComponent, CommonModule
  ],
  providers: [ModalController] // Declare ModalController as a provider for dependency injection
})

export class Tab1Page {
  
  // Array to store contacts
  contacts: Contact[] = [
    new Contact('Fran', 'Jipani', 'f.jipani@griffith.edu.au'),
    new Contact('John', 'Smith', 'j.smith@griffith.edu.au')
  ];

  constructor(private modalController: ModalController) {
    // Add icons to the IonIcon library
    addIcons({add});
  }

  // Method to open the contact modal for adding a new contact
  async openContactModal(){
    const modal = await this.modalController.create({
      component: ContactModalComponent,
      componentProps: {
        mode: 'add', // Set the mode to 'add' to indicate adding a new contact
      }
    });

    // Handle the data returned when the modal is dismissed
    modal.onDidDismiss().then(data => {
      if (data && data.data) {
        const contactData = data.data;
        this.addContact(contactData);
      }
    });

    return await modal.present();
  }

  // Method to open the contact modal for editing an existing contact
  async openContactModalEdit(contact: Contact){
    const modal = await this.modalController.create({
      component: ContactModalComponent,
      componentProps: {
        mode: 'edit', // Set the mode to 'edit' to indicate editing an existing contact
        contact: contact, // Pass the contact to be edited to the modal
      }
    });

    // Handle the data returned when the modal is dismissed
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        const contactData = data.data;
        this.saveContact(contact, contactData); // Call saveContact with edited data
      }
    });

    return await modal.present();
  }

  // Method to add a new contact to the contacts array
  addContact(contactData: any){
    if (contactData){
      const {firstName, lastName, email} = contactData;
      const newContact = new Contact(firstName, lastName, email);
      this.contacts.push(newContact);
    }
  }

  // Method to save the edited contact data
  saveContact(originalContact: Contact, editedContactData: {firstName: string, lastName: string, email: string}) {
    // Find the index of the original contact in the array
    const index = this.contacts.indexOf(originalContact);
    if (index !== -1) {
      // Update the contact with edited data
      this.contacts[index].firstName = editedContactData.firstName;
      this.contacts[index].lastName = editedContactData.lastName;
      this.contacts[index].email = editedContactData.email;
    }
  }

  // Method to delete a contact from the contacts array
  deleteContact(contact: Contact){
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
