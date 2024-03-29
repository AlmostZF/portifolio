import { Component } from '@angular/core';
import { LanguageService } from 'src/app/utils/languageService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  dictionary: any;
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
  }
}
