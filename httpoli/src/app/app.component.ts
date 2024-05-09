import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nuovaPrenotazione!: Prenotazione;
  constructor() {}
  prenota(newNome: HTMLInputElement, 
          newCognome: HTMLInputElement, 
          newIndirizzo: HTMLInputElement,
          newTelefono: HTMLInputElement,
          newMail: HTMLInputElement,
          newData: HTMLInputElement,
          newOra: HTMLInputElement): boolean 
  {
   this.nuovaPrenotazione = new Prenotazione(newNome.value, newCognome.value, newIndirizzo.value,newTelefono.value,newMail.value,newData.value,newOra.value)
   return false
  }
  
}
