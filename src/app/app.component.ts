import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// local imports
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DictionaryService } from './dictionary.service';
import { ApplicationService } from './application.service';

// importing interface
import { response, error } from './interfaces/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, ErrorMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  searchQuery: string = '';
  audioSRC!:string[];
  fontType: string = 'sans-serif';
  dropDownIsActive: boolean = false;
  fetchResponse: boolean = false;
  isDark: boolean = true;
  notFound: boolean = false;
  emptyField: boolean = false;
  loadingState:boolean = false;
  timeout:number[] = [1, 3, 5];
  error!: error;
  word!: response[];

  constructor(
    private dictionaryService: DictionaryService,
    private applicationService: ApplicationService,
    private detectChange: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.dictionaryService.readFromApi('hello').subscribe(response=>{
    //   // console.log(response);
    //   // this.word = response;

    // });
    this.applicationService.setTheme('dark');
  }

  searchWord(event: KeyboardEvent): void {
    if (event.key !== 'Enter') return;

    const input = event.target as HTMLInputElement;
    const value = input.value;

    this.emptyField = false;
    this.fetchResponse = false;
    this.notFound = false;
    
    if (value === '') {
      console.log(value, 'empty field');
      this.emptyField = true;
      this.notFound = false;
      this.fetchResponse = false;
      this.loadingState = false;
      return;
    }
    this.loadingState = true;

    this.searchDictionary(value);
    this.detectChange.detectChanges();
  }

  searchDictionary(word: string) {
    this.dictionaryService.readFromApi(word).subscribe(
      (result) => {
        console.log(result);
        // console.log('audio src: ', this.audioSRC);

        this.word = result;
        console.log(this.word);
        this.loadingState = false;
        this.fetchResponse = true;
        this.notFound = false;
        this.emptyField = false;
        return;
      },
      (error) => {
        this.notFound = true;
        this.error = error.error;
        this.emptyField = false;
        this.fetchResponse = false;
        this.loadingState = false;
        return;
      }
    );
  }

  findSelectedWord (word: string) {
    console.log(word);
    this.searchDictionary(word);
  }

  changeFontType(event: MouseEvent): void {
    const target = event.target as HTMLButtonElement;
    const text = target.innerText;

    this.applicationService.setFont(text);
    this.fontType = text;
  }

  openMenu() {
    return (this.dropDownIsActive = !this.dropDownIsActive);
  }

  toggleDarkMode(isDark: boolean) {
    this.isDark = isDark;
    const mode = isDark ? 'dark' : 'light';
    this.applicationService.setTheme(mode);
  }

  playPhoneticSound () {
    const audioPlayer = document.querySelector('.audioPlayer') as HTMLAudioElement;
    audioPlayer.play();
  }
}
