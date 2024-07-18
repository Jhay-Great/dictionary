import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  setTheme (theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  };

  setFont (fontType:string) {
    let value:string;
    switch (fontType) {
      case 'sans-serif':
        value = '"Inter", sans-serif'
        break;
      case 'serif':
        value = '"Lora", serif'
        break;
      case 'mono':
        value = '"Inconsolata", monospace';
        break;
      default:
        value = 'sans-serif';
    }
    console.log(value);
    document.documentElement.style.setProperty('--font-family', value);

    }
    // document.body.classList.add(fontType);

    // setTheme(theme: 'light' | 'dark'): void {
    //   document.documentElement.setAttribute('data-theme', theme);
    //   localStorage.setItem(this.themeKey, theme);
    // }
  }

  

