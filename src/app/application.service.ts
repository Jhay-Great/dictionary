import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  setTheme (theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // setTheme(theme: 'light' | 'dark'): void {
  //   document.documentElement.setAttribute('data-theme', theme);
  //   localStorage.setItem(this.themeKey, theme);
  // }
  
}
