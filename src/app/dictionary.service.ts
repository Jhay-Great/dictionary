import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// interface
import { response } from './interfaces/data';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  // api
  api: string = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

  constructor(
    // private http: HttpClient,
    private http: HttpClient
  ) {}

  readFromApi(keyword: string) {
    return this.http.get<response[]>(`${this.api}${keyword}`);
  }
}
