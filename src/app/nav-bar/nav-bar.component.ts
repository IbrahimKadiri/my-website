import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DataService } from '../data/data.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-nav-bar',
  imports: [CommonModule, ScrollToDirective, TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  constructor(private _translate: TranslateService, private _dataService: DataService, private _router: Router) {}

  isLangMenuOpen = false;
  ismobileMenuOpen = false;
  lastScrollTop = 0;
  navbarVisible = true;

  menuItems: any;
  languagesList: any;
  selectedLanguage: any;
  currentRoute: string = '';  // Variable pour stocker la route actuelle

  ngOnInit(): void {
    this.menuItems = this._dataService.menuItems;
    this.languagesList = this._dataService.languagesList;
    this.selectedLanguage = this.languagesList[0];

    // Écouter les événements de navigation et obtenir l'URL après la redirection
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)  // Filtrer les événements pour les NavigationEnd
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects;  // Stocker l'URL dans la variable
    });
  }

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

   // Ferme le menu burger si l'utilisateur clique en dehors
   @HostListener('document:click', ['$event'])
   closeMenuOnOutsideClick(event: MouseEvent) {
     // Si l'utilisateur clique en dehors du menu, ferme le menu
     const menu = document.getElementById('mobile-menu');
     if (menu && !menu.contains(event.target as Node)) {
       this.ismobileMenuOpen = false;
     }
   }
 
   // Ferme le menu lorsque l'utilisateur clique sur un onglet
   closeMenu() {
     this.ismobileMenuOpen = false;
   }
   

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
