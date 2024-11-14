import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightName]',
  standalone: true,
})
export class HighlightNameDirective {
  private readonly el: ElementRef = inject(ElementRef);
  private readonly renderer: Renderer2 = inject(Renderer2);
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && target.tagName === 'IMG') {
      this.setNameColor('green');
    } else {
      this.setNameColor('red');
    }
  }

  private setNameColor(color: string) {
    const nameElement = this.el.nativeElement.querySelector('.user-info-name');
    if (nameElement) {
      this.renderer.setStyle(nameElement, 'color', color);
    }
  }
}
