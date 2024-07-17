import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DictionaryService } from './dictionary.service';

// importing interface
import { response } from './interfaces/data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  word!:response;
  dropDownIsActive:boolean = false;
  searchQuery:string = '';

  constructor (
    private dictionaryService: DictionaryService,
  ) {}

  ngOnInit(): void {
    this.dictionaryService.readFromApi('hello').subscribe(response=>{
      // console.log(response);
      // this.word = response;
      
    });
  }

  searchWord (event: KeyboardEvent) :void {
    if (event.key !== 'Enter') return;

    const input = event.target as HTMLInputElement;
    const value = input.value;
    
    this.searchDictionary(value);
    
  }
  
  searchDictionary(word:string) {
    this.dictionaryService.readFromApi(word).subscribe(result => {
      // console.log(result);

      this.word = result[0];
      console.log(this.word);
      return;
    })

  }

  openMenu () {
    return this.dropDownIsActive = !this.dropDownIsActive;
  }
}
