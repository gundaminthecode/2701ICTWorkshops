import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonButtons, IonIcon, IonInput} from '@ionic/angular/standalone';


@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButton, IonIcon, IonInput, IonButtons,
            FormsModule]
})
export class ContactModalComponent  implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  addContact() {
    const contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.modalController.dismiss(contact);
  }
}
