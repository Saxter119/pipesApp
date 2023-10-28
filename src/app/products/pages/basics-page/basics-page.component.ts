import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public nameLower: string = 'saiter'
public nameUpper: string = 'SAITER'
public fullName: string = 'sAiTeR'

public date: Date = new Date()

}
