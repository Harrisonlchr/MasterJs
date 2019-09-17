import {Component} from '@angular/core';

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
  })

  export class ZapatillasComponent {
    public titulo: string;
    public articulos: Array<string> = ["a","b","c","d"];



    constructor(){
      this.titulo = "Las Zapa";

    }
  }
