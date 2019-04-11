import { Component, OnInit } from '@angular/core';
import { SpeicherwahlService } from 'src/app/speicherwahl.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  constructor(
    private service: SpeicherwahlService
  ) { }

  speicherwahl: boolean = this.service.speicher;

  ngOnInit() {
  }

}
