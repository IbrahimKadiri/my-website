import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [ScrollToDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
