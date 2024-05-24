import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Image } from '../models/images.model';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private storage: Storage) { }
}
