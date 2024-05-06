import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-casella',
  templateUrl: './casella.component.html',
  styleUrls: ['./casella.component.css']
})
export class CasellaComponent implements OnInit  {
  observPrenotazioneArray !: Observable<Prenotazione[]>;
  prenotazioni : Prenotazione[] = [];
  
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    this.makeTypedRequest()
  }

  makeTypedRequest() : void
  {
    this.observPrenotazioneArray = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/PolisenoRiccardo/fakeServer/prenotazioni');
    this.observPrenotazioneArray.subscribe(prenotazioni => {this.prenotazioni = prenotazioni;});
  }
}
