import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  @ViewChild('spinner', {read: ElementRef})
  spinnerRef: ElementRef;

  /**
   * Shows spinner on screen.
   */
  public show(): void {
    const target = this.spinnerRef.nativeElement;
    target.style.opacity = 0;
    const effect = setInterval(function () {
      if (target.style.opacity > 0.9) {
        target.style.opacity = 1;
        clearInterval(effect);
        target.style.display = 'flex';
      } else {
        target.style.opacity += 0.05;
      }
    }, 10);
  }

  /**
   * Hide spinner from screen.
   */
  public hide(): void {
    const target = this.spinnerRef.nativeElement;
    target.style.opacity = 1;
    const effect = setInterval(function () {
      if (target.style.opacity < 0.1) {
        clearInterval(effect);
        target.style.display = 'none';
      } else {
        target.style.opacity -= 0.05;
      }
    }, 10);
  }

}
