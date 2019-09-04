'use strict'


var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit',()=>{
	
	var titulo = document.querySelector('#addpelicula').value;
	if (titulo.length > 0) {
		localStorage.setItem(titulo,titulo);	
	}
	
});

var ul = document.querySelector("#peliculas-list");
for(var i in localStorage){
	  
	if (typeof localStorage[i] == 'string') {
		var li = document.createElement("li");
		li.append(localStorage[i]);	
		ul.append(li);
		}
}

var formularioB = document.querySelector("#formDeletPeliculas");

formularioB.addEventListener('submit',()=>{
	
	var titulo = document.querySelector('#deletPelicula').value;
	if (titulo.length > 0) {
		localStorage.removeItem(titulo,titulo);	
	}
	
});