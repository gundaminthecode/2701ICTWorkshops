import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Ionic standalone components
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput, IonItemSliding} from '@ionic/angular/standalone';

import { Contact } from '../tab1/tab1.page'; // Import the Contact model

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  standalone: true, // Indicates that this component can be used independently
  imports: [
    // Import necessary Ionic components and FormsModule
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon, IonInput, IonButtons,
    FormsModule
  ]
})
export class ContactModalComponent  implements OnInit {

  @Input() mode: 'add' | 'edit' = 'add'; // Input property for mode ('add' or 'edit')
  @Input() contact: Contact | null = null; // Input property for contact data

  firstName: string = ""; // Initialize firstName
  lastName: string = ""; // Initialize lastName
  email: string = ""; // Initialize email

  modeName: string = "Add"; // Initialize modeName

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // If mode is 'edit' and contact is provided, set modeName to 'Update' and initialize form fields with contact data
    if (this.mode === "edit" && this.contact) {
      this.modeName = "Update";
      this.firstName = this.contact.firstName;
      this.lastName = this.contact.lastName;
      this.email = this.contact.email;
    }
  }

  dismiss() {
    this.modalController.dismiss(); // Dismiss the modal
  }

  addContact() {
    // Create a contact object with input values and dismiss the modal with contact data
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.modalController.dismiss(contact);
  }

}
