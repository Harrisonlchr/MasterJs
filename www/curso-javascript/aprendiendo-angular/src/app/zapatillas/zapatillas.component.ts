import {Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla'


@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
  })

  export class ZapatillasComponent {
    public titulo: string = 'Componente de zapatillas';
    public artZapatilla: Array<Zapatilla>;

    constructor(){
      this.artZapatilla = [

        new Zapatilla("Retro", "Adidas", "Negro-Verde", 80, true),
        new Zapatilla("Jordan", "Nike", "Rojo-Verde", 90, true),
        new Zapatilla("Yankee", "Rebook", "Rojo-Verde", 70, true),
        new Zapatilla("Retross", "Rebook", "Rojo-Verde", 72, true)

      ];

    }
    ngOnInit(){
        console.log(this.artZapatilla);
    }

  }
