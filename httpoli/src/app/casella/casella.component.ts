import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-casella',
  templateUrl: './casella.component.html',
  styleUrls: ['./casella.component.css']
})
export class CasellaComponent {
  observPrenotazioneArray !: Observable<Prenotazione[]>;
  prenotazioni : Prenotazione[] = [];
  
  constructor(public http: HttpClient) {}

  makeTypedRequest() : void
  {
    this.observPrenotazioneArray = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/PolisenoRiccardo/fakeServer/prenotazioni');
    this.observPrenotazioneArray.subscribe(prenotazioni => {this.prenotazioni = prenotazioni;});
  }
}
