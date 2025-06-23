import { AfterViewInit, Component } from '@angular/core';
import { SnakeService } from './utils/snakeService';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  game: boolean = false;

  constructor(private snakeService: SnakeService) {}

  ngAfterViewInit() {

    this.snakeService.game.subscribe(value => {
      this.game = value;
    });
  }
}
