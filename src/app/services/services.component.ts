import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [ScrollToDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
