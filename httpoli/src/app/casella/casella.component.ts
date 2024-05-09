import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Prenotazione } from '../prenotazione.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-casella',
  templateUrl: './casella.component.html',
  styleUrls: ['./casella.component.css']
})
export class CasellaComponent implements OnInit  {
  observPrenotazioneArray !: Observable<Prenotazione[]>;
  observPrenotazione!: Observable<Prenotazione>;
  prenotazioni : Prenotazione[] = [];
  prenotazioneSelezionata !:Prenotazione;
  selezionata: boolean = false;

  @Input() postPrenotazione!: Prenotazione;
  
  constructor(public http: HttpClient) {}
  ngOnInit(): void {
    this.makeTypedRequest()
  }

  makeTypedRequest() : void
  {
    this.observPrenotazioneArray = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/PolisenoRiccardo/fakeServer/prenotazioni');
    this.observPrenotazioneArray.subscribe(prenotazioni => {this.prenotazioni = prenotazioni;});
  }

  selezione(prenotazione: Prenotazione) {
    this.prenotazioneSelezionata = prenotazione;
    this.selezionata = true;
  }

  makePost(): void
  {
    let posted = JSON.stringify(Prenotazione);
    const headers = {'Content-Type': 'application/json', 'My-Custom-Header': 'foobar' };
    this.observPrenotazione = this.http.post<Prenotazione>("https://my-json-server.typicode.com/PolisenoRiccardo/fakeServer/prenotazioni", posted, {headers});
    this.observPrenotazione.subscribe(postPrenotazione => {this.postPrenotazione = postPrenotazione;});
    this.prenotazioni.push(this.postPrenotazione)
  }

}
