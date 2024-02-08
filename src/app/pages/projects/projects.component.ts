import { Component } from '@angular/core';
import { LanguageService } from 'src/app/utils/languageService';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  dictionary: any;
  constructor(public languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
  }
}
