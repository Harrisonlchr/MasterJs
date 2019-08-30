'use strict'

// Parametros REST Y SPREAD

										/////////////////	
function listadoFrutas(Fruta1, Fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", Fruta1);
	console.log("Fruta 2: ", Fruta2);
	console.log(resto_de_frutas);

}


//listadoFrutas("Naranja", "Manzana","Sandia","Melon","Coco");

var frutas = ["Naranja","Manzana"]
listadoFrutas(...frutas,"Sandia","Melon","Coco");