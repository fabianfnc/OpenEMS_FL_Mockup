import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeicherwahlService {

  //Speicherwahl bei IBN
  //True = ProHybrid, False = Commercial
  speicher: boolean;

  constructor() { }
}
