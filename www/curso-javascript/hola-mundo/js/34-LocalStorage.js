'use strict'

// LocalStorage

// HTML5 WebStorage

if(typeof(Storage) !== 'undefined'){
	console.log("LocalStorage disponible");
}else{
	console.log("Incompatible con LocalStorage disponible");
}

// GUARDAR DATOS en el LOCAL STORAGE

localStorage.setItem("titulo", "Curso de js-localStorage");

// RECUPERAR ELEMENTO 
document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");


// GUARDAR OBJETOS EN EL LOCAL STORAGE
var usuario = {
		nombre: "Harrison Chacon",
		email: "Harrisonlchr@gmail.com",
		edad: 27,
		numero: 1121763932
};

localStorage.setItem("usuario", JSON.stringify(usuario));


// Recuperar OBJETO

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(userjs.nombre+" - "+userjs.numero+" - "+userjs.email);


//BORRAR EL LOCAL STORAGE
//localStorage.clear();