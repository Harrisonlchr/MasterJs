'use strict'

// BOM - BROWSER OBJECT MODEL

function getBOM(){
	
//lo mismo
	//console.log(screen.innerWidt);
	//console.log(screen.innerHeight);
	console.log(window.innerHeight);
	console.log(window.innerWidth);
	console.log(window.location);
	console.log(window.location.href);
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url,"","width=400,height=300");
}

getBOM();

