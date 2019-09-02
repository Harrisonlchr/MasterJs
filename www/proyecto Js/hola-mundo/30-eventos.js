'use strict'

// Eventos 
/* Los eventos son sucesos que se realizan cuando el usuario realiza una accion, un click, etc.*/


// EVENTOS DE RATON

window.addEventListener('load', ()=>{

	function cambiarColor() {
		console.log("Me has dado click");

		var bg = boton.style.background;

		if(bg == "green"){
			boton.style.background = "yellow";
		}else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}	

	var boton = document.querySelector("#boton");



	// EVENTO CLICK
	boton.addEventListener('click', function(){
		cambiarColor();
	});

	// Mouse over

	boton.addEventListener('mouserover', function(){
		boton.style.background = "yellow";
	});

	// Mouse out

	boton.addEventListener('mouserout', function(){
		boton.style.background = "#ccc";
	});

	// focus
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("Estas dentro del input");
	});

	// blur
	input.addEventListener('blur', function(){
		console.log("Estas fuera del input");
	});
	// keydown
	input.addEventListener('keydown', function(event){
		console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));

	});

	// keypress
	input.addEventListener('keypress', function(event){
		console.log("Tecla presionada", String.fromCharCode(event.keyCode));

	});
	// keyup
	input.addEventListener('keyup', function(event){
		console.log("Tecla soltada", String.fromCharCode(event.keyCode));

	});	


});// end load
