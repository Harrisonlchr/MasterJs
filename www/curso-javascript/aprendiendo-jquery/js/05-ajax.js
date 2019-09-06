'use strict'

$(document).ready(()=>{

  // Load
var datos = $("#datos");
//datos.load("https://reqres.in/");

// GET
  $.get("https://reqres.in/api/users", {page: 2}, function (response) {
    response.data.forEach((element, index) => {
      datos.append("<p>"+element.first_name+" "+element.last_name+"<p/>")
    })

  })



// POST



  var formulario = $("#formulario");
  var usuario ="";

  formulario.submit(function (e) {
    e.preventDefault();

      usuario = {
      nombre: $('input[name="name"]').val(),
      apellido: $('input[name="apellido"]').val(),
    };
    console.log(usuario);
    $.post($(this).attr("action"), usuario  , function (response){
      console.log(response);
    });
    return false;

});





})
