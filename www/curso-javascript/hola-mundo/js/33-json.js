'use strict'
console.log("CORRECTO 33");

// JSON JavaScript Object Notation

var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados Unidos'
};

var peliculas = [
	{
		titulo: "Harry Potter",
		year: 2020,
		pais: "London"
	},pelicula,
		
	{
		titulo: "Piratas del Caribe",
		year: 2018,
		pais: "EEUU"
	}
];

var caja_p = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
	caja_p.append(p);
}


