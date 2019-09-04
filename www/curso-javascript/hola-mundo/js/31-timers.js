'use strict'

window.addEventListener('load', ()=>{
	



/////////////////////////////////////////////////////////
	function intervalo() {
		// body...
	
				//setTimeOut
		var tiempo = setInterval(()=>{

		console.log("Set interval ejecutando");

		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "20px";
		}else{
			encabezado.style.fontSize = "50px";
		}
		
	}, 1000);

		return tiempo;
	}
/////////////////////////////////////////////////////////
		var tiempo = intervalo();
/////////////////////////////////////////////////////////
		var stop = document.querySelector("#stop");
		
		stop.addEventListener("click", ()=>{
			alert("Has parado el bucle de intervalo");
			clearInterval(tiempo);
		});
/////////////////////////////////////////////////////////
		var iniciar = document.querySelector("#iniciar");


		iniciar.addEventListener("click", ()=>{
			alert("Has iniciado el bucle de intervalo");
			intervalo();
		});
/////////////////////////////////////////////////////////






	});			
