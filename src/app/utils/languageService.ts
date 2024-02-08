import { Injectable } from '@angular/core';// Adjust the path as needed
import { Dictionary } from './language';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private _dictionary = new BehaviorSubject<any>(Dictionary.Lenguage.en);
  dictionary = this._dictionary.asObservable();

  changeLanguage(languague: string) {
    this._dictionary.next(
      languague==='pt-BR' ? Dictionary.Lenguage.pt : Dictionary.Lenguage.en);
  }
}
