import { Component } from '@angular/core';
import { ContactService } from '../data/contact.services';
import { FormsModule } from '@angular/forms';  // Import de FormsModule pour les formulaires
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  showPopup: boolean = false;
  errorMessage: string = '';  // Pour afficher les messages d'erreur

  constructor(private _contactService: ContactService) { }

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
