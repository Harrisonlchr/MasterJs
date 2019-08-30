'use strict'

// ARRAYS, ARREGLOS, MATRICES

var nombre = "Harrison Chacon";
var nombres = ["Harrison","Maria","Juan",3,2,1,true];

//-------------------------0--1--2--3-4--5------indices
var lenguajes = new Array("a","b",1,2,3,false);

/*
console.log(nombres);
console.log(lenguajes);

//console.log(lenguajes[2]);

var indice = parseInt(prompt("Que indice del array quieres?",0));

if(indice >= nombres.length){
	alert("Introduce un indice menor que: " + nombres.length);
	
}else{
	alert("El usuario seleccionado es: " + nombres[indice]);
}

*/

document.write("<h1>Nombres de amigos</h1></br>");
document.write("<ul>");
/*
for(var i = 0; i < nombres.length; i++){
	document.write("<li>"+nombres[i]+"</li>");
}*/

nombres.forEach((e, i)=>{

	document.write("<li>"+i+" - "+e+"</li>");

});

document.write("</ul>");

