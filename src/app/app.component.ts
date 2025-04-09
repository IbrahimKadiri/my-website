import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';

import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, HomeComponent, AboutComponent, ServicesComponent, ExpertiseComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {}
  
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
      rootMargin: '0px',
      threshold: 0.5, // L'élément doit être visible à 50% pour que l'Observer se déclenche
    };

    // Crée un nouvel IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Lorsque la section devient visible, met à jour l'URL
          const sectionId = entry.target.id;
          this.router.navigate([`/${sectionId}`]);
          console.log('entry', entry, 'sectionId', sectionId);
        }
      });
    }, options);

    // Observer chaque section
    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
