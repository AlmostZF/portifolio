import { Component } from '@angular/core';
import { LanguageService } from 'src/app/utils/languageService';

@Component({
  selector: 'app-change-language',
  templateUrl: './change-language.component.html',
  styleUrls: ['./change-language.component.css'],
})
export class ChangeLanguageComponent {
  dictionary: any;
  selectedLanguage: string = 'pt-BR';
  listLanguages: { name: string; value: string; flag: string }[] = [];

  constructor(public languageService: LanguageService) {
    this.languageService.changeLanguage('pt-BR');
  }

  ngOnInit() {
    let listlanguagesSelect: { name: string; value: string; flag: string }[] =
      [];
    this.listLanguages = [];

    this.languageService.dictionary.subscribe((dictionary) => {
      listlanguagesSelect = [
        {
          name: dictionary.english,
          value: 'en',
          flag: 'https://cdn-icons-png.flaticon.com/512/206/206626.png',
        },
        {
          name: dictionary.portuguese,
          value: 'pt-BR',
          flag: 'https://cdn-icons-png.flaticon.com/256/206/206597.png',
        },
      ];

      this.dictionary = dictionary;
      this.listLanguages = listlanguagesSelect;
    });
  }

  selectLanguage() {
    let changelanguage = '';
    if(this.selectedLanguage !== 'en'){
      changelanguage = 'en'
      this.languageService.changeLanguage(changelanguage);
      this.selectedLanguage = changelanguage;
      return;
    }
    changelanguage = 'pt-BR'
    this.languageService.changeLanguage(changelanguage);
    this.selectedLanguage = changelanguage;
    return
  }
}
