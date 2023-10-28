import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BasicsPageComponent } from 'src/app/products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from 'src/app/products/pages/numbers-page/numbers-page.component';



@Component({
  selector: 'shared-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = []

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y fechas',
            icon: 'pi pi-align-left',
            routerLink: 'basics'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        items: [
          {
            label: 'Custom Pipe',
            icon: 'pi pi-config',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }

}
