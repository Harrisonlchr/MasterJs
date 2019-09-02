'use strict'

// DOM - DOCUMENT OBJECT MODEL



// COMO CONSEGUIR ELEMENTOS CON UN ""ID""

// var caja = document.getElementById("micaja");

function cambiaColor(color){
	caja.style.background = color;
}


var caja = document.querySelector("#micaja");

caja.innerHTML = "TEXTO EN LA CAJA DESDE JavaScript";
caja.style.background = "yellow";
caja.style.padding = "20px";
caja.style.color = "brown";
caja.className = "hola hola2";



// CONSEGUIR ELEMENTOS POR SU ETIQUETA
var todoLosDivs = document.getElementsByTagName('div');
//console.log(todoLosDivs);

/*
var contenidoEnTexto = todoLosDivs[2];
contenidoEnTexto.textContent;
contenidoEnTexto.innerHTML = "Otro texto para el 2do div";
contenidoEnTexto.style.background = "black";
contenidoEnTexto.style.color = "white";
console.log(contenidoEnTexto);
*/

///odoLosDivs.forEach((valor, indice)=> {



var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todoLosDivs){
	
	if (typeof todoLosDivs[valor].textContent == 'string'){
		

		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todoLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}	

}
seccion.append(hr);
//})

 
// CONSEGUIR ELEMENTOS POR SU CLASE



