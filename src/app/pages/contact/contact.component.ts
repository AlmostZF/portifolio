import { Component } from '@angular/core';
import { LanguageService } from 'src/app/utils/languageService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  dictionary: any;
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
  }
}
