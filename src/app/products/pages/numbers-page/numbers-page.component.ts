import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styles: [
  ]
})
export class NumbersPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public totalSells: number = 1234654.4531
  public percent: number = 0.8765

}
