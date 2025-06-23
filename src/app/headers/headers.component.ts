import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../utils/languageService';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  dictionary: any;
  previousItem: any;
  // btnMenu: boolean = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });

  }

  openMenu() {

    const menu = document.getElementById('menu') as HTMLElement;
    menu.classList.add('open-menu')
  }

  closeMenu() {

    const openMenu = document.getElementById('menu') as HTMLElement;
    openMenu.classList.remove('open-menu');
  }

  changeColor(event: any) {

    const target = event.target;
    target.classList.add('active');

    const header = document.querySelector('.header') as HTMLElement;

    const headerStyle = window.getComputedStyle(header);

    const navbarDesktopLinks = document.querySelectorAll('.navbar-desktop a');
    const navbarMobileLinks = document.querySelectorAll('.navbar-mobile a');


    if (headerStyle.color == "rgb(115, 224, 184)") {

      navbarDesktopLinks.forEach((link: any) => {
        link.style.color = "black"
        link.classList.remove('active');
      });
      
      navbarMobileLinks.forEach((link: any) => {
        link.style.color = "black"
        link.classList.remove('active');
      });

      target.classList.add('active');
      return;
    }


    navbarDesktopLinks.forEach((link: any) => {
      link.style.color = "black"
      link.classList.remove('active');
    });

    navbarMobileLinks.forEach((link: any) => {
      link.style.color = "black"
      link.classList.remove('active');
    });

    target.classList.add('active');

  }

  ngAfterViewInit() {
    const sections = Array.from(document.querySelectorAll('section'));
    const config = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting) {
          document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add('active');
        } else {
          document.querySelector(`.navbar a[href="#${id}"]`)?.classList.remove('active');
        }
      });
    }, config);

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
