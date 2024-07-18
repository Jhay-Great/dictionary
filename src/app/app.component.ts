import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  imports: [RouterOutlet, ErrorMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  word!:response;
  searchQuery:string = '';
  fontType:string = 'sans-serif';
  dropDownIsActive:boolean = false;
  fetchResponse:boolean = false;
  isDark:boolean = true;
  notFound:boolean = false; 
  emptyField: boolean = false;
  error!:error;

  constructor (
    private dictionaryService: DictionaryService,
    private applicationService: ApplicationService,
    private detectChange: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // this.dictionaryService.readFromApi('hello').subscribe(response=>{
    //   // console.log(response);
    //   // this.word = response;
      
    // });
    this.applicationService.setTheme('dark');
  }

  searchWord (event: KeyboardEvent) :void {
    if (event.key !== 'Enter') return;

    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value === '') {
      console.log(value, 'empty field');
      this.emptyField = true;
      return;
    }
    
    this.searchDictionary(value);
    this.detectChange.detectChanges();
    
  }
  
  searchDictionary(word:string) {
    this.dictionaryService.readFromApi(word).subscribe(result => {
      // console.log(result);

      this.word = result[0];
      console.log(this.word);
      this.fetchResponse = true;
      this.notFound = false;
      return;
    }, error => {
      console.log(error.error)
      console.log('not found');
      this.notFound = true;
      this.error = error.error;
      this.emptyField = false;
      this.fetchResponse = false;
      return;
    })

  }

  changeFontType (event: MouseEvent) :void {
    const target = event.target as HTMLButtonElement;
    const text = target.innerText;
    
    this.applicationService.setFont(text);
    this.fontType = text;
    
  }

  openMenu () {
    return this.dropDownIsActive = !this.dropDownIsActive;
  }

  toggleDarkMode (isDark:boolean) {
    
    this.isDark = isDark
    const mode = isDark ? 'dark' : 'light'
    this.applicationService.setTheme(mode);

    
  }
  
}
