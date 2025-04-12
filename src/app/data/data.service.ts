import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Le service est accessible globalement dans l'app
})
export class DataService {

  constructor() { }

  menuItems: any = [
    {
      label: 'HOME', id: '/home'
    },
    {
      label: 'ABOUT', id: '/about'
    },
    {
      label: 'SERVICES', id: '/services'
    },
    {
      label: 'EXPERTISES', id: '/expertises'
    },
    {
      label: 'CONTACT', id: '/contact'
    },
  ];

  languagesList: any = [
    {
      label: 'Francais',
      code: 'fr',
      icon: 'FR.svg',
    },
    {
      label: 'Anglais',
      code: 'en',
      icon: `EN.svg`,
    },
    {
      label: 'Néerlandais',
      code: 'nl',
      icon: `NL.svg`,
    },
  ];
}
