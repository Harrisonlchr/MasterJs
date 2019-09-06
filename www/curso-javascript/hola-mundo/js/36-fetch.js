'use strict'

// FETCH (AJAX) y PETICIONES A SERVICIOS / APIS REST

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
var div_profesor = document.querySelector("#profesor");

getUsuarios()
	.then(data => data.json())
	.then(users => {
		listadoUsuarios(users.data);
		
		return getInfo();
	})
	.then(data => {
		div_profesor.innerHTML = data;
		
		return 	getJanet();
	})	
	.then(data => data.json())
	.then(user => {
		mostrarJanet(user.data);

	}) 
	.catch(error =>{
		alert("Error en las peticiones");
	
	});




function getUsuarios(){
	return fetch('https://reqres.in/api/users?page=2');
}


function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}




function listadoUsuarios(usuarios){
	usuarios.map((users, i)=>{
			let nombre = document.createElement("h4");
			nombre.innerHTML = i +".- "+users.first_name+ " "+ users.last_name;
		
			div_usuarios.append(nombre);

			document.querySelector(".loading").style.display = "none";
		});
	}


function mostrarJanet(user){
		console.log(user);
			let nombre = document.createElement("h2");
			nombre.innerHTML = ".- "+user.first_name+ " "+ user.last_name;
		
			div_janet.append(nombre);

			document.querySelector("#janet .loading").style.display = "none";
		
	}	








// EJEMPLO DE PROMESAS!!!



function getInfo(){

	var profesor = {
		nombre: "Harrison",
		apellido: "Chacon",
		numero: 1121763932
	};


	return new Promise((resolve, reject)=>{
		var profesor_string = "";
				
		setTimeout(()=>{
			profesor_string = JSON.stringify(profesor);
			
			if (typeof profesor_string != 'string' || profesor_string == '') return reject('Error 1');
			
			return resolve(profesor_string);
			

		},3000);

	});	

	
}	