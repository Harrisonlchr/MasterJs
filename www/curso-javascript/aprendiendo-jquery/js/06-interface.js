$(document).ready(function () {
    //alert("ATR");

    // draggable(); Para mover elementos <div> etc.. por la pagina web
    $('.elemento').draggable();

    // resizable(); estilo Css para reajustar la medida de las caja o elementos
    $('.elemento').resizable();

    // selectable(); para seleccionar
  //  $('.lista').selectable();

    // sortable(); para mover li dentro de listas ul
    $('.lista').sortable();
})
