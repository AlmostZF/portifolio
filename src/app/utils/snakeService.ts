// snake.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {
  private _game = new BehaviorSubject<boolean>(false); 
  
  game = this._game.asObservable(); 
  
  playSnake() {
    this._game.next(true); 
  }

  stopSnake() {
    this._game.next(false); 
  }
}