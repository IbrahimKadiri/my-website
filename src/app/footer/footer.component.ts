import { Component } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [ScrollToDirective, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _translateService: TranslateService){}
}
