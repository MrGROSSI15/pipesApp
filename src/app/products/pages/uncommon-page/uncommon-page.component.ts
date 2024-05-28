import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n select
  public name: string = 'Marc';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Moni';
    this.gender = 'female';
  }


  //i18n plural
  public clients:string[] = ['fernando', 'leclerc', 'sainz', 'max', 'bottas', 'hamilton', 'norris']
  public clientsMap = {
    '0': 'no hay clientes',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando',

  }

  deleteClient(): void {
    this.clients.shift();

  }


  //keyvaluepipe

  public person = {
    name: 'Marc',
    age: 26,
    address: 'Llloseta, Mallorca'
  }

  //async pipe

  public myObservableTimer = interval(2000).pipe(
    tap ( value => console.log( 'tap:', value ))
  );


  public promiseValue = new Promise( (resolve, reject ) =>{
    setTimeout(() => {
      resolve('tenemoos data');
    }, 3500);
  })
}
