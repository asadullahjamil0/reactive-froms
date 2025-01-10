import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChangeMe]'
})
export class ChangeMeDirective {

  @Input() myColor = '';
  @Input() myBgColor = '';

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.color = 'red';
    // this.el.nativeElement.style.backgroundColor = 'orange';
    this.el.nativeElement.style.fontFamily = 'cursive';
  }
  ngOnInit() {
    this.el.nativeElement.style.color = this.myColor;
    this.el.nativeElement.style.backgroundColor = this.myBgColor;
  }

}
