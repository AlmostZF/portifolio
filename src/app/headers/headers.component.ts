import { Component } from '@angular/core';
import { LanguageService } from '../utils/languageService';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  dictionary: any;
  previousItem: any;

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
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
