import { Component, OnInit } from '@angular/core';
import { SpeicherwahlService } from '../../speicherwahl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auswahl',
  templateUrl: './auswahl.page.html',
  styleUrls: ['./auswahl.page.scss'],
})
export class AuswahlPage implements OnInit {


  constructor(
    private service: SpeicherwahlService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToCheckHybrid(){
    this.service.speicher = true;
  }
  goToCheckCommercial(){
    this.service.speicher = false;
  }
}
