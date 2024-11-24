import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ''; // Background color for highlight
  @Input() highlightTextColor = ''; // Text color during highlight
  @Input() defaultTextColor = ''; // Default text color
  @Input() highlightFontSize = ''; // Font size during highlight
  @Input() highlightBorder = ''; // Border style during highlight
  @Input() shadowEffect = false; // Shadow effect toggle

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyles({
      backgroundColor: this.appHighlight || 'yellow',
      color: this.highlightTextColor || 'black',
      fontSize: this.highlightFontSize || 'inherit',
      border: this.highlightBorder || 'none',
      boxShadow: this.shadowEffect ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none'
    });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles({
      backgroundColor: '',
      color: this.defaultTextColor || 'inherit',
      fontSize: 'inherit',
      border: 'none',
      boxShadow: 'none'
    });
  }

  private setStyles(styles: { [key: string]: string }) {
    Object.keys(styles).forEach(style =>
      this.renderer.setStyle(this.el.nativeElement, style, styles[style])
    );

    // Smooth transitions for effects
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
  }
}
