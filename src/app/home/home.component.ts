import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ScrollToDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
