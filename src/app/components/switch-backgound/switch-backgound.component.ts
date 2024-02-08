import { Component } from '@angular/core';
import { Dictionary } from 'src/app/utils/language';
import { LanguageService } from 'src/app/utils/languageService';

@Component({
  selector: 'app-switch-backgound',
  templateUrl: './switch-backgound.component.html',
  styleUrls: ['./switch-backgound.component.css']
})
export class SwitchBackgoundComponent {
  dictionary: any;
  isDarkMode = false;

  constructor(public languageService: LanguageService) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme');
    const aboutSection = document.querySelector('.about') as HTMLElement;
    aboutSection.style.transition = 'all 0.5s ease-out';
    aboutSection.style.backgroundColor = this.isDarkMode ? 'var(--opositecolor)' : 'var(--bgcolor)';
    const aboutContext = aboutSection.querySelector('.about-context') as HTMLElement;
    aboutContext.style.transition = 'all 0.5s ease-out';
    aboutContext.style.color = this.isDarkMode ? 'var(--bgcolor)' : 'var(--opositecolor)';
    const homeSection = document.querySelector('.home') as HTMLElement;
    homeSection.style.transition = 'all 0.5s ease-out';
    homeSection.style.color = this.isDarkMode ? 'var(--opositecolor)' : 'var(--bgcolor)';
    const iconGithub = document.querySelector('#style-icon') as HTMLElement;
    iconGithub.style.transition = 'all 0.5s ease-out';
    iconGithub.style.color = this.isDarkMode ? 'var(--defaultwhite)' : 'var(--bgcolor)';
  }
}
