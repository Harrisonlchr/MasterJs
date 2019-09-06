'use strict'

/*jQuery(document).ready(()=>{

});
*/

$(document).ready(function () {
	
// Selector de ID	

	$("#rojo").css("background", "red") 
			  .css("color", "white");	
	
	$("#amarillo").css("background", "yellow")
				  .css("color", "black");

	$("#verde").css("background", "green")
			   .css("color", "#FA8072");

// Seleector de Clases

	var mi_clase = $(".zebra").css("padding", "6px");
	


	$(".x").click(function(){
		$(this).addClass("zebra");

	});	
	//console.log(mi_clase.eq(1));
	
	//console.log(mi_clase[0]);



// Selectores de etiquetas

	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
		var that = $(this);
		
		if(!that.hasClass('grande')) {
				that.addClass('grande');
		}else{
			that.removeClass('grande');			
		}
		
	});


// Selectores de Atributos

$('[title="Github"]').css('background', 'grey');
$('[title="Google"]').css('background', 'grey');


// Otros
// $('p, a').addClass('margen-superior'); 

});
