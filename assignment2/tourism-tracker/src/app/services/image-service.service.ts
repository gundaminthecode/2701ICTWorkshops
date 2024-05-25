import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Image } from '../models/images.model';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private STORAGE_KEY = 'images';

  constructor(private storage: Storage) { }

  async addImage(image: Image) {
    let images: Image[] = await this.storage.get(this.STORAGE_KEY) || [];
    images.push(image);
    await this.storage.set(this.STORAGE_KEY, images);
  }

  async getImagesForCurrentTrip(currentTripId: number): Promise<Image[]> {
    let images: Image[] = await this.storage.get(this.STORAGE_KEY) || [];
    return images.filter((image: Image) => image.journeyId === currentTripId);
  }

  async removeImagesByJourneyId(journeyId: number) {
    let images: Image[] = await this.storage.get('images') || [];
    images = images.filter(image => image.journeyId !== journeyId);
    await this.storage.set('images', images);
  }

}
