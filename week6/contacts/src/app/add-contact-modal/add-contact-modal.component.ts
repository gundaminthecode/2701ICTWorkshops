import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, IonLabel, IonButtons } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/tab1/tab1.page'

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonIcon, IonCheckbox, IonItem, IonInput, IonLabel, FormsModule, IonButtons]
})
export class AddContactModalComponent  implements OnInit {

  @Input() mode: 'add' | 'edit' = 'add';
  @Input() contact: Contact | null = null;

  firstName: string = "";
  lastName: string = "";
  email: string = "";

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    if (this.mode === "edit" && this.contact) {
      this.firstName = this.contact.firstName;
      this.lastName = this.contact.lastName;
      this.email = this.contact.email;
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  addContact() {
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
    this.modalController.dismiss(contact);
  }

  saveContact() {
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
    };
    this.modalController.dismiss(contact);
  }

}
