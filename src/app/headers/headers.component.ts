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

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });

  }
  // @HostListener('document:click', ['$event'])
  // clickBtnMeny(event: any) {
  //   const btnMenu = document.getElementById('.btn-menu') as HTMLElement;
  //   const menu = document.getElementById('.menu') as HTMLElement;

  //   if (event.target === btnMenu) {
  //     menu.classList.add('open-menu');
  //   }
  // }
  openMenu() {
    const menu = document.getElementById('menu') as HTMLElement;
    menu.classList.add('open-menu')
    console.log(menu.classList)
  }
  closeMenu(){
    const openMenu = document.getElementById('menu') as HTMLElement;
    openMenu.classList.remove('open-menu');
  }

  changeColor(event: any) {
    if (this.previousItem) {
      this.previousItem.style.color = '';
      this.previousItem.style.fontWeight = '';
    }
    const anchorElement = document.querySelector('.active') as HTMLElement;
    if (anchorElement) {
      anchorElement.style.color = 'var(--fontcolor)';
    }
    const target = event.target;
    target.style.color = 'var(--secondcolor)';
    target.style.fontWeight = '480';
    this.previousItem = target;
  }

  ngAfterViewInit() {
    const sections = Array.from(document.querySelectorAll('section'));
    const config = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id') ;
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
