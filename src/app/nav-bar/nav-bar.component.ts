import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule, ScrollToDirective],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isLangMenuOpen = false;
  ismobileMenuOpen = false;

  menuItems = [
    {
      label: 'Acceuil', id: 'home'
    },
    {
      label: 'Présentation', id: 'about'
    },
    {
      label: 'Services', id: 'services'
    },
    {
      label: 'Expertises', id: 'expertises'
    },
    {
      label: 'Contact', id: 'contact'
    },
  ]
  languages = [
    {
      label: 'English (US)',
      code: 'en',
      icon: `<circle fill="#b22234" cx="8" cy="8" r="8"></circle>`,
    },
    {
      label: 'Deutsch',
      code: 'de',
      icon: `<rect fill="#000" width="16" height="5"></rect>
             <rect fill="#d00" y="5" width="16" height="5"></rect>
             <rect fill="#ffce00" y="10" width="16" height="5"></rect>`,
    },
    {
      label: 'Italiano',
      code: 'it',
      icon: `<rect fill="#009246" width="5" height="16"></rect>
             <rect fill="#fff" x="5" width="5" height="16"></rect>
             <rect fill="#ce2b37" x="10" width="5" height="16"></rect>`,
    },
  ];

  selectedLanguage = this.languages[0];


  toggleMobileMenu() {
    this.isLangMenuOpen = false;
    this.ismobileMenuOpen = !this.ismobileMenuOpen;
  }
  toggleLangMenu() {
    this.ismobileMenuOpen = false;
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  selectLanguage(lang: any) {
    this.selectedLanguage = lang;
    this.isLangMenuOpen = false;
    console.log('Langue sélectionnée :', lang.code);
    // Ici, tu pourrais appeler un service de traduction (i18n)
  }
}
