import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-expertise',
  imports: [TranslateModule],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.css'
})
export class ExpertiseComponent {

  constructor(private _translateService: TranslateService){}
}
