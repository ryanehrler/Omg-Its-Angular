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
        cli_nodejs_version:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/intro__setting_up_environment__cli_nodejs_version.jpg?alt=media&token=8da43b62-7b78-4b2c-9fd5-91b19e9b3aeb'
      }
    },
    service_topics: {
      providedIn: {
        providers_array:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__providers_array.jpg?alt=media&token=824647cb-28ed-4689-b285-261d9b876c86',
        network_tab_providers_array:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__network_tab_providers_array.jpg?alt=media&token=ce945077-cd6d-4800-af20-ec95a25be542',
        lazy_route:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__lazy_route.jpg?alt=media&token=c2c27f59-4d6f-4b96-a585-fff22c582b6a',
        providedIn_service:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__providedIn_service.jpg?alt=media&token=5a1babe1-cc51-4869-b4c7-c64b0a84c753',
        lazy_component:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__lazy_component.jpg?alt=media&token=6649a563-c427-4ac2-b219-c74cad80428b',
        lazy_module_network_tab:
          'https://firebasestorage.googleapis.com/v0/b/omgitsangular.appspot.com/o/service_topics__providedIn__lazy_module_network_tab.jpg?alt=media&token=411c2b80-ce72-4fa5-9e1d-b3bd0e2d983b'
      }
    }
  };

  constructor() {}
}
