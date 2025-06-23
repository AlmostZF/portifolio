import { Component } from '@angular/core';
import { IStack } from 'src/app/Interfaces/stacks';
import { LanguageService } from 'src/app/utils/languageService';
import { SnakeService } from 'src/app/utils/snakeService';
import { StackService } from 'src/app/Interfaces/stacksImplementation';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 })) 
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AboutComponent {
  dictionary: any;
  listStack!: IStack[];
  isTerminalOpen: boolean = false;
  backgroundTerminal: string = 'var(--bgcolor)';
  command!:string;


  constructor(public languageService: LanguageService, private snakeService: SnakeService, private stackService: StackService) {

    this.listStack = this.stackService.populateListStack();
  }
  
  
  ngOnInit() {
    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
    
  }


  enableTerminal(){
    
    const about = document.querySelector('.about') as HTMLElement;
    
    const computedStyle = getComputedStyle(about);
    
    if (computedStyle.backgroundColor !== 'rgb(41, 37, 38)') {

      this.backgroundTerminal = 'var(--opositecolor)';
      this.isTerminalOpen = !this.isTerminalOpen;
      return;
    }
    
    this.backgroundTerminal = 'var(--bgcolor)'; 
    this.isTerminalOpen = !this.isTerminalOpen;

  }

  
  inputTerminal(event: KeyboardEvent): void {
    if(event.key == 'Enter'){

      event.preventDefault();

      if(this.command?.toLowerCase() == 'sudo snake' || this.command?.toLowerCase() == 'snake'){

        this.snakeService.playSnake();

        return
      }

    }
    return
  }
}
