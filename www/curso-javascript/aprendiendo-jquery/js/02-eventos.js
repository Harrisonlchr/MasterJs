'use strict'

$(document).ready(function () {

	// MouseOver y MouseOut

var caja = $("#caja");

/*
caja.mouseover(function () {
	$(this).css("background","red");

})
caja.mouseout(function () {
	$(this).css("background", "blue");
	$(this).css("color", "white");
	$(this).css("font-size","30px");
})
*/


// Hover
function cambiaRojo() {
	$(this).css("background","red")
				.css("font-size", "10px");
}
function cambiaAzul() {
	$(this).css("background", "blue")
					.css("color", "white")
					.css("font-size","30px");

}

caja.hover(cambiaRojo,cambiaAzul);


// Click, Doble Click

caja.click(function(){
	$(this).css("background","black")
					.css("color", "yellow");
})


caja.dblclick(function(){
	$(this).css("background","pink")
					.css("color", "red")
					.css("font-size", "35px");
})


// Focus y Blur
var nombre = $("#nombre");
/*$("#nombre")*/nombre.focus(function () {
	$(this).css("border", "2px dashed red");

});
	nombre.blur(function () {
		$(this).css("border", "2px solid transparent");

	});


// MouseDown y MouseUp
	nombre.mousedown(function () {

	});

	nombre.mouseup(function () {

	});
// MouseMove
	$(document).mousemove(function () {
		console.log("En X: "+event.clientX);
		console.log("En Y: "+event.clientY);
		
	});
})
