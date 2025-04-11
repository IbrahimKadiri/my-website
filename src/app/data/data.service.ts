import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Le service est accessible globalement dans l'app
})
export class DataService {

  constructor() { }

  menuItems: any = [
    {
      label: 'Accueil', id: '/home'
    },
    {
      label: 'Présentation', id: '/about'
    },
    {
      label: 'Services', id: '/services'
    },
    {
      label: 'Expertises', id: '/expertises'
    },
    {
      label: 'Contact', id: '/contact'
    },
  ];

  languagesList: any = [
    {
      label: 'Francais',
      code: 'FR',
      icon: 'FR.svg',
    },
    {
      label: 'Anglais',
      code: 'EN',
      icon: `EN.svg`,
    },
    {
      label: 'Néerlandais',
      code: 'NL',
      icon: `NL.svg`,
    },
  ];
}
