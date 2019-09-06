'use strict'

 $(document).ready(function () {
   //alert("TAMO READY");

var that = $(this);
var caja = $("#caja");
var mostrar = $("#mostrar");
var ocultar = $("#ocultar");

mostrar.click(function () {
  caja.show('fast');
      //.fadeIn()
      //.fadeTo('slow', 0)  
})
ocultar.click(function () {
  caja.hide('fast');
      //.fadeOut()
      //.fadeTo('slow', 1)
})








 })
