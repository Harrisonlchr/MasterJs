'use strict'
$(document).ready(function () {

  reloadLinks();




  $("#add_button").click(function () {
    $("#menu").append('<li><a href="'+$("#add_link").val()+'"></a><li/>')
    $("#add_link").val('')
    reloadLinks();
  });

function reloadLinks() {

  $('a').each(function (index) {
    var that = $(this);
    var enlace = that.attr("href");
    that.text(enlace);
  });
}




})
