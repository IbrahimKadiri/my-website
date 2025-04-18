import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HomeComponent, AboutComponent, ServicesComponent, ExpertiseComponent, ContactComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private _router: Router, private _translate: TranslateService) {
    this._translate.addLangs(['en', 'fr', 'nl']);
    const browserLang = this._translate.getBrowserLang(); // ex: "en", "fr"
    const lang: any = browserLang?.toLowerCase();
    this._translate.use(this._translate.getLangs().includes(lang) ? lang : 'en');
  }
  
  
  ngOnInit(): void {
    AOS.init({
      offset: 200,   // Décale l'animation de 200px avant d'être déclenchée
      duration: 600, // Durée de l'animation
      once: false,
    });
  }

  ngAfterViewInit() {
    this.initIntersectionObserver();
  }

  initIntersectionObserver() {
    // Récupère toutes les sections par leurs IDs
    const sections = document.querySelectorAll('section');
    // Définir les options pour l'IntersectionObserver
    const options = {
      root: null, // Observer le viewport
      ootMargin: '0px 0px -50% 0px', // Observer avant que la section ne soit complètement visible
      threshold: 0.3, 
    };

    // Crée un nouvel IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Lorsque la section devient visible, met à jour l'URL
          const sectionId = entry.target.id;
          this._router.navigate([`${sectionId}`]);
        }
      });
    }, options);

    // Observer chaque section
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
