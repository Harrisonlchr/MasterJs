'use strict'

/*
programa que pida 2 numeros y nos diga cual es el mayor, el menor y si son iguales

PLUS: SI LOS NUMEROS NO SON UN NUMERO O SON MENORES O IGGUAL A 0, VOLVER A PEDIR NUMERO.
*/

var numero1 = parseInt(prompt('Ingrese un numero',0));
var numero2 = parseInt(prompt('Ingrese un numero',0));


while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt('Ingrese un numero',0));
	numero2 = parseInt(prompt('Ingrese un numero',0));
}

if(numero1 == numero2){
	alert("Los numeros son iguales");
}else if (numero1 > numero2) {
	alert("El numero mayor es: " + numero1+"\n"+"El numero menor es :"+numero2);

}else if (numero1 < numero2) {
	alert("El numero mayor es: " + numero2+"\n"+"El numero menor es :"+numero1);

}else{
	alert("Introduce un numero correcto");
}