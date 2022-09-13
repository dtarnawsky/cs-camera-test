import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cameraOptions: ImageOptions = {
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera,
    width: 1024,
    quality: 50,
  };

  photoOptions: ImageOptions = {
    resultType: CameraResultType.Base64,
    source: CameraSource.Photos,
    width: 1024,
    quality: 50,
  };

  constructor() { }

  async getCamera() {
    const status = await Camera.checkPermissions();
    console.log(status);

    const photo = await Camera.getPhoto(this.cameraOptions);
    console.log(photo);
  }

  async getGallery() {
    const status = await Camera.checkPermissions();
    console.log(status);

    const photo = await Camera.getPhoto(this.photoOptions);
    console.log(photo);
  }
}
