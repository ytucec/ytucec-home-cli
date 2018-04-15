import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { WOW } from 'wowjs';

/**
 * Template variable for Particles.js library
 */
declare const particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(LoaderComponent)
  loader: LoaderComponent;

  @ViewChild('contact', {read: ElementRef})
  contactSectionRef: ElementRef;

  @ViewChild('topButton', {read: ElementRef})
  topButtonRef: ElementRef;

  constructor() {
    // Initialize wow.js for rendering css animations
    new WOW().init();
  }

  ngAfterViewInit() {
    // Load particles.js with default configuration
    const self: HomeComponent = this;
    particlesJS.load('particles-js', '../../../assets/config/particles.json', function () {
      self.loader.hide();
    });
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    if (verticalOffset > 200) {
      this.topButtonRef.nativeElement.style.display = 'block';
    } else {
      this.topButtonRef.nativeElement.style.display = 'none';
    }
  }

  /**
   * Scrolls to about section.
   */
  public scrollToCheckout(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  /**
   * Scrolls to contact section.
   */
  public scrollToContact(): void {
    this.contactSectionRef.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }

  /**
   * Scrolls to top of the page.
   */
  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}
