import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule, ScrollToDirective, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private _translate: TranslateService) {}
  
  isLangMenuOpen = false;
  ismobileMenuOpen = false;
  lastScrollTop = 0;
  navbarVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Si l'utilisateur a défilé vers le bas
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // On cache la navbar
      this.navbarVisible = false;
    } else if (currentScroll < this.lastScrollTop) {
      // Si l'utilisateur défile vers le haut, on montre la navbar
      this.navbarVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour ne pas aller dans des valeurs négatives
  }
  

  menuItems = [
    {
      label: 'Accueil', id: 'home'
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
  languagesList = [
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

  selectedLanguage = this.languagesList[0];


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
    // Ici, tu pourrais appeler un service de traduction (i18n)
    this._translate.use(lang.code);
    
  }
  
}
