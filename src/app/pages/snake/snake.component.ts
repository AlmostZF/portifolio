import { animate, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, ViewEncapsulation, OnInit} from '@angular/core';
import { gsap } from 'gsap';
import { LanguageService } from 'src/app/utils/languageService';
import { SnakeService } from 'src/app/utils/snakeService';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css'],
  encapsulation: ViewEncapsulation.None,
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
export class SnakeComponent implements AfterViewInit, OnDestroy  {

  dictionary: any;

  private mouseMoveListener: any;
  private moveItemListener: any;
  private mouseOverListenerAdded!: boolean;

  private eventExit!: any;

  protected size: number = 10;

  constructor(private snakeService: SnakeService, private languageService: LanguageService,) {

    this.languageService.dictionary.subscribe((dictionary) => {
      this.dictionary = dictionary;
    });
  }

  ngAfterViewInit() {
    this.initialAnimation();
    this.addMouseMoveEvent();
    this.addEventExit();
  }

  addEventExit(): void {
    this.eventExit = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.snakeService.stopSnake();
        console.log('Escape pressionado');
        this.ngOnDestroy();
      }
    };
    document.addEventListener('keydown', this.eventExit);
  }

  initialAnimation() {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    if (cursor) {
      for (let i = 0; i < this.size; i++) {
        const span = document.createElement('span');
        span.classList.add('box');
        span.style.setProperty('--i', (i + 1).toString());
        span.style.left = i * 20 + 'px';
        span.style.filter = `hue-rotate(${i * 10}deg)`;
        cursor.appendChild(span);
      }
    } else {
      console.error('Cursor não encontrado');
    }
  }

  // initialAnimation() {
  //   const cursor = document.querySelector('.cursor') as HTMLElement;
  //   if (cursor) {
  //     const elems: any[] = [];
  
      
  //     for (let i = 0; i < this.size; i++) {
  //       const span = document.createElement('span');
  //       span.classList.add('box');
  //       span.style.setProperty('--i', (i + 1).toString());
  //       span.style.filter = `hue-rotate(${this.size * 10}deg)`;
  //       cursor.appendChild(span);
  
  //       elems.push({ use: span, x: 800 / 2 + i * 40, y: 600 / 2 }); 
  //     }
  
  //     const pointer = { x: 800 / 2, y: 600 / 2 };
      
  //     const animate = () => {
  //       let a:number;
        
  //       for (let i = 0; i < this.size; i++) {
  //         let e = elems[i];
  
  //         if (i === 0) {
  //           let frm = Math.random();
  //           const ax = (Math.cos(3 * frm) * 0 * 800) / 800;
  //           const ay = (Math.sin(4 * frm) * 0 * 600) / 600;
  //           e.x += (ax + pointer.x - e.x) / 10;
  //           e.y += (ay + pointer.y - e.y) / 10;
  //         } else {

  //           let ep = elems[i - 1];
  //           a = Math.atan2(e.y - ep.y, e.x - ep.x);
  //           e.x += (ep.x - e.x + (Math.cos(a) * (100 - i)) / 5) / 4;
  //           e.y += (ep.y - e.y + (Math.sin(a) * (100 - i)) / 5) / 4;  
  //         }
  

  //         const s = (162 + 4 * (1 - i)) / 50;
  //         const validX = !isNaN((e.x + e.x) / 2) ? (e.x + e.x) / 2 : 0;
  //         const validY = !isNaN((e.y + e.y) / 2) ? (e.y + e.y) / 2 : 0;
  //         const validA = !isNaN((180 / Math.PI) * 200) ? (180 / Math.PI) * 200 : 0;
  //         const validS = !isNaN(s) ? s : 1;
          
  //         e.use.setAttributeNS(
  //           null,
  //           "transform",
  //           `translate(${validX},${validY}) rotate(${validA}) scale(${validS},${validS})`
  //         );
  //       }
  

  //       requestAnimationFrame(animate);
  //     };
  
  //     animate();
  //   }
  // }
  
  getRandomPosition() {
    const sectionsMain = document.getElementById('sectionsMain') as HTMLElement;
    const sectionRect = sectionsMain.getBoundingClientRect();

    const maxX = sectionRect.width - 1;
    const maxY = sectionRect.height - 1;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
  }
  
  openModal(){
    alert(this.dictionary.gameText)
  }


  addMouseMoveEvent() {
    const itensCatch = document.getElementById('snake_food') as HTMLElement;
    const lastItensCatch = document.getElementById('snake_food_last') as HTMLElement;
  
    this.mouseOverListenerAdded = false;

    this.moveItemListener = (e: MouseEvent) => {
      if (this.size === 50) {
        itensCatch.style.display = 'none';
        lastItensCatch.style.display = 'flex'
        document.removeEventListener('mouseover', this.moveItemListener);
        return;
      }
  
      const { x, y } = this.getRandomPosition();
  

      itensCatch.style.left = `${x}px`;
      itensCatch.style.top = `${y}px`;
  
      const cursor = document.querySelector('.cursor') as HTMLElement;
      const span = document.createElement('span');
      span.classList.add('box');
  
      this.size += 1;
      span.style.setProperty('--i', (this.size + 1).toString());
      span.style.left = (this.size) * 0 + 'px';
      span.style.filter = `hue-rotate(${this.size * 10}deg)`;
      cursor.appendChild(span);
    };
  
    this.mouseMoveListener = (e: MouseEvent) => {
      gsap.to('.box', {
        x: e.clientX,
        y: e.clientY,
        stagger: 0.05
      });
  

      if (this.mouseOverListenerAdded == false) {
        document.addEventListener('click', this.moveItemListener);
        this.mouseOverListenerAdded = true;
      }
    };
  

    document.addEventListener('mousemove', this.mouseMoveListener);
  
  }
  ngOnDestroy(): void {

    if (this.eventExit) {
      document.removeEventListener('keydown', this.eventExit);
    }

    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
    
    if (this.moveItemListener) {
      document.removeEventListener('click', this.moveItemListener);
    }

  }
}