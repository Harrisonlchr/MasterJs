'use strict'

var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt("Introduce un numero",0));

	if(isNaN(numero)){
		numero = 0;
	}else if(numero >=0){
		suma += numero;

		contador++;
	}
	console.log(suma);
	console.log(contador);	
}while(numero >= 0)
	alert("La suma de todo los numero es: "+ suma+"\n"+"La media de todo los numeros es: "+(suma/contador));