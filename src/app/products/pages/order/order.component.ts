import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;

  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
    name: 'superman',
    canFly: true,
    color: Color.Blue
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.Green
      }
    ]


  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }


  changeOrder (value: keyof Hero){
    this.orderBy = value;

  }

}
