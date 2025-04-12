import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [ScrollToDirective, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  constructor( private _translateService: TranslateService){}
}
