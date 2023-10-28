import { Component, OnInit } from '@angular/core';
import { interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Adrian'

  public gender: 'male' | 'female' = 'male'


  public invitationMap = {
    'male': 'invitarlo',

    'female': 'invitarla'
  }

  changeClient() {

    if (this.name === 'Adrian') {
      this.name = 'WonderWoman'
      this.gender = 'female'
    }

    else {
      this.name = 'Adrian'
      this.gender = 'male'
    }

  }
  //i18nPlural
  public clients: string[] = ['Adrián', 'Saiter', 'Bello', 'Mateo', 'Medina', 'Issac', 'Israel', 'Felipe', 'Schiaretti']

  deleteClient(): void {
    this.clients.shift();
  }

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': `tenemos # clientes esperando`
  }

  //KeyValue Pipe
  public person = {
    name: 'Adrian',
    age: '19',
    state: 'San Juan, RD',
  }

  //Async pipe
  public myObervableTimer = interval(1000)
    .pipe(
      tap(value =>  console.log(value))
      )


}






