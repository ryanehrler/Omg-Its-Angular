import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  /* 
    Goal here is to centralize full image paths, so if I have to ever changes sources I can just 
    update one location instead searching through the application for img tags.
  */

  // Probably a better way of doing this
  images = {
    intro: {
      setting_up_environment: {
        cli_nodejs_version: "https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/intro__setting_up_environment__cli_nodejs_version.jpg?alt=media&token=8da43b62-7b78-4b2c-9fd5-91b19e9b3aeb"
      }
    }
  }

  constructor() { }
}
