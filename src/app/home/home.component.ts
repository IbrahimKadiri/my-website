import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ScrollToDirective, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _translateService: TranslateService) {}
}
