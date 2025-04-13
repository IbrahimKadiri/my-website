import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ScrollToDirective } from '../shared/scroll-to.directive';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

declare var VANTA: any;

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ScrollToDirective, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(private _translateService: TranslateService) {}

  @ViewChild('vantaRef') vantaRef!: ElementRef;
  private vantaEffect: any;

  ngAfterViewInit(): void {
    this.vantaEffect = VANTA.BIRDS({
      el: this.vantaRef.nativeElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      alignment: 20,
      backgroundAlpha: 0,
      birdSize: 1,
      cohesion: 20,
      color1: 0x6366F1 , // couleur1 (16711680 en décimal)
      color2: 0xA3BFFA, // couleur2 (53759 en décimal)
      colorMode: 'varianceGradient',
      quantity: 5,
      scale: 1,
      scaleMobile: 1,
      separation: 20,
      speedLimit: 5,
      wingSpan: 30
    });
  }

  ngOnDestroy(): void {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

}
