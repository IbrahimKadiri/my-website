import { AfterViewInit, Component } from '@angular/core';
import { ContactService } from '../data/contact.services';
import { FormsModule } from '@angular/forms';  // Import de FormsModule pour les formulaires
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare let L: any;

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  showPopup: boolean = false;
  errorMessage: string = '';  // Pour afficher les messages d'erreur
  showToast = false;
  email = 'elkadiri.ibrahim@hotmail.com';
  
  constructor(private _contactService: ContactService, private _translateService: TranslateService) { }
  ngAfterViewInit(): void {
    const map = L.map('map').setView([50.8503, 4.3517], 13); // Bruxelles
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    L.marker([50.8503, 4.3517]).addTo(map)
      .bindPopup('Bruxelles')
      .openPopup();
  }

  // Fonction de soumission du formulaire
  onSubmit(formData: any): void {
    const formToSend = new FormData();
    formToSend.append('first-name', formData.value.firstName);
    formToSend.append('last-name', formData.value.lastName);
    formToSend.append('email', formData.value.email);
    formToSend.append('message', formData.value.message);
    console.log('Message envoyé avec succès!', formToSend);

    // Envoi du formulaire via le service
    this._contactService.sendMessage(formToSend).subscribe(
      response => {
        console.log('Message envoyé avec succès!', response, formToSend);
        this.showPopup = true;  // Afficher la pop-up de confirmation
        this.errorMessage = '';  // Réinitialiser les messages d'erreur
        this.showToast = true;
         //  Masquer le toast après 3 secondes
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      },
      error => {
        console.error('Erreur lors de l\'envoi du message:', error);
        this.errorMessage = 'Une erreur est survenue, veuillez réessayer.';  // Afficher un message d'erreur
      }
    );
  }

  // Fonction pour fermer la pop-up
  closePopup(): void {
    this.showPopup = false;
  }
}
