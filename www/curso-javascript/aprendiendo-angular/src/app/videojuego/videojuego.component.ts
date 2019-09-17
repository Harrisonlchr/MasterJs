import {Component} from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponet {
  public titulo: string;
  public listado: string;


  constructor(){
    this.titulo = "Componente de Videojuegos";
    this.listado = "Listado de los juegos mas populares";
    console.log("Se ha cargado el componente: videojuego.component.ts")
  }
}
