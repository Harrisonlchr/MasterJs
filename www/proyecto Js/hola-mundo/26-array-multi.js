'use strict'

// ARRAYS MULTI DIMENSIONALES

var categorias = ["Accion","Terror","Comedia",];
var peliculas = ["La vida es Bella","La bella y la bestia","Piratas del caribe"];

peliculas.sort();
console.log(peliculas);

var cine = [categorias, peliculas];


//document.write(cine[0][2],cine[0][1]+"</br>");
//document.write(cine[1][2],cine[1][1]);


peliculas.push("Batman");


do{
	var	elementos = prompt("Intruduce tu pelica");	
	peliculas.push(elementos);

}while(elementos != "ACABAR");
peliculas.pop();
console.log(peliculas);	

