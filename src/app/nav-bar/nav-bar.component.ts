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
  mobileMenuOpen = false;

  darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);
  }
}
