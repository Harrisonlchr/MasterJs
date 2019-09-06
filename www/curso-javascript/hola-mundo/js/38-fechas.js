'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var horas = fecha.getHours();

var textoHora=  `
	El año es: ${year}
	El mes es: ${mes+1} Los meses comienzan desde el 0 - enero
	El dia es : ${dia}
	La hora es: ${horas}
`
console.log(textoHora);

// Date object - Javascript