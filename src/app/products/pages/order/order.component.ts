import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeCase() {
    this.isUpperCase = !this.isUpperCase
  }

  public isUpperCase: boolean = false

  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'NightWing',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Silver surfer',
      canFly: true,
      color: Color.gray
    },
  ]

  changeOrder(orderBy: keyof Hero): void {
    this.orderBy = orderBy
  }

}
