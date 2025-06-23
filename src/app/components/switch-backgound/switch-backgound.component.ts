import { Component } from '@angular/core';
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

    // Usando ngClass para controlar classes dinamicamente
    const aboutSection = document.querySelector('.about') as HTMLElement;
    const aboutContext = aboutSection.querySelector('.about-context') as HTMLElement;
    const homeSection = document.querySelector('.home') as HTMLElement;
    const iconGithub = document.querySelector('#style-icon') as HTMLElement;
    const iconWhatsapp = document.querySelector('.fa-whatsapp') as HTMLElement;
    const terminal = document.querySelector('.terminal') as HTMLElement;

    // Aplicando transições e estilos com base no modo
    if (aboutSection) {
      aboutSection.style.transition = 'all 0.5s ease-out';
      aboutSection.style.backgroundColor = this.isDarkMode ? 'var(--opositecolor)' : 'var(--bgcolor)';
    }

    if (aboutContext) {
      aboutContext.style.transition = 'all 0.5s ease-out';
      aboutContext.style.color = this.isDarkMode ? 'var(--bgcolor)' : 'var(--opositecolor)';
    }

    if (homeSection) {
      homeSection.style.transition = 'all 0.5s ease-out';
      homeSection.style.color = this.isDarkMode ? 'var(--opositecolor)' : 'var(--bgcolor)';
    }

    if (iconGithub) {
      iconGithub.style.transition = 'all 0.5s ease-out';
      iconGithub.style.color = this.isDarkMode ? 'var(--defaultwhite)' : 'var(--bgcolor)';
    }

    if (iconWhatsapp) {
      iconWhatsapp.style.transition = 'all 0.5s ease-out';
      iconWhatsapp.style.color = this.isDarkMode ? 'var(--primarycolor)' : 'var(--secondDarkercolor)';
    }

    if (terminal) {
      terminal.style.transition = 'all 0.5s ease-out';
      terminal.style.backgroundColor = this.isDarkMode ? 'var(--opositecolor)' : 'var(--bgcolor)';
    }

    
  }
}
