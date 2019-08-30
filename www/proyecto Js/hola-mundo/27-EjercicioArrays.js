'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array

2. Tiene que mostrar el array completo / todo sus elementos, en el cuerpo de la pag y la consola

3- Ordenarlos y mostrarlos

4- Invertir su orden y mostrarlo

5- Mostrar cuantos elementos tiene el array

6. Buscar de un valor introducido por el usuario y que nos diga si esta en el array y su INDICE


*/

// 1.-

// EN FUNCION
// Mostar en el cuerpo de la pag
function mostrarArray(elementos, textoCustom = ""){
document.write("<h1>Contenido del array "+textoCustom+"</h1>")
numeros.forEach((numero, index) => {
	document.write("<strong>"+numero+"</strong></br>")
});
}


//  Pedir 6 numeros
//var numeros = new Array(6);
var numeros = [];
for(var i=0; i<=5; i++){
	//numeros[i] = parseInt(prompt("Introduce un numero ",0));
	numeros.push(parseFloat(prompt("Introduce un numero ",0)));
}


// 2.-
// Mostrar en el cuerpo de la pag
mostrarArray(numeros);



// Mostrar el array en la consola
console.log(numeros);


// 3.-
// Ordenarlo y mostrarlo
numeros.sort((a,b)=> a-b);
mostrarArray(numeros, "Ordenados");



// 4.- 
// Invertir y mostar
numeros.reverse();
mostrarArray(numeros, "Revertidos");



// 5.-
// Cuantos elementos tiene el array
console.log(numeros.length);
document.write("<h1>El Array tiene :"+numeros.length+" elmentos.</h1>");


// 6.- 
// Buscar un valor introducido por consola
var busqueda= parseFloat(prompt("Busca un numero",0));

var posicion = numeros.findIndex( numero => numero == busqueda);
if(posicion && posicion != -1){
	document.write("<h1> Encontrado</h1>");
	document.write("<h1> En la posicion: "+ posicion+"</h1>");
}else{
	document.write("<h1>No encontrado</h1>");
}
