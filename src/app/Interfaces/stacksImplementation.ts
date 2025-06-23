import { Injectable } from "@angular/core";
import { IStack } from "./stacks";

@Injectable({
  providedIn: 'root'
})

export class StackService {
    populateListStack(): IStack[] {
      return [
        {
          height: '100',
          alt: 'TypeScript',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'JavaScript',
          src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'Angular',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'SCSS  ',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'CSS3',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'HTML5',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'react',
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          width: '200'
        },
        {
          height: '100',
          alt: 'NodeJS',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'C#',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'SQL',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
          width: '200'
        },
        {
          height: '100',
          alt: 'linux',
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
          width: '200'
        },

      ];
    }
  }
  