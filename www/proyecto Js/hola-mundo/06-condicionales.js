'use strict'

//Condicional IF

var edad1 = 30;
var edad2 = 12;

if (edad1 > edad2) {
	console.log("Edad uno es mayor que edad dos");
}else{
	console.log("La edad es inferior");
}

//Operadores logicos 

// AND (Y) : &&
// OR  (O) : ||
//NEGACION : !

var year = 2018;

//DISTINTO DE O NEGACION
if(year	!= 2016){
	console.log("El año no es 2016");
}


//AND
if (year>=2000 && year <= 2020) {
	console.log("Estamos en la era actual");
}else{
	console.lo("Estamos en la era post moderna");
}


// OR 
if (year == 2008 || year == 2018) {
	console.log("El año acaba en 8");
}
