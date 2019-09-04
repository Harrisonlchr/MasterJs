'use strict'

//Funciones
// es un conjunto de ordenes, que se van a ejecutar cuando la invoquemos
/*
alert();
prompt();
*/

/*
function calculadora(){
	//Declarar la funcion
	console.log("Hola soy la calculadora");
	console.log("Si soy yo");
}

//Invocar o llamar la funcion
calculadora();
//console.log(calculadora(), calculadora());

*/

function calculadora(a, b, mostrar = false){

	if(mostrar == false){
		console.log("Suma: " + (a+b));
		console.log("Resta: " + (a-b));
		console.log("Multiplicacion: " + (a*b));
		console.log("Division: " + (a/b));
	}else{

		document.write("Suma: " + (a+b)+"<br/>");
		document.write("Resta: " + (a-b)+"<br/>");
		document.write("Multiplicacion: " + (a*b)+"<br/>");
		document.write("Division: " + (a/b)+"<br/>");
	}
}

calculadora(2, 5, true);

/*
for(var i=1; i <=10; i++){
	console.log(i);
	calculadora(i,8);
}

*/