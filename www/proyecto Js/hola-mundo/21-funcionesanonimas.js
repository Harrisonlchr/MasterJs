'use strict'

// Funciones Anonimas

//ES UNA FUNCION QUE NO TIENE NOMBRE

//UN CALLBACK ES UNA FUNCION DENTRO DE otra FUNCION

/*
var pelicula = function(nombre){
	return "La pelicula es : "+nombre;

}*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1+numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;

}

sumame(5, 7, function(dato){
	console.log("La suma es: ", dato);
}, 
function(dato){
	console.log("La suma por dos es: ", (dato*2));
});