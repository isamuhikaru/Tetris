$(document).ready(function() {

  //Cambio de Color a Titulo:
  function cambio_color_arriba() {
    $("h1.main-titulo").animate({
      opacity: "1"
      //No se puede quedar sin no cambiar alguna propiedad CSS por ello se pone esta que no afecta
    }, 2000, "linear", function() {
      $(this).css({
        'color': "white"
      });
    }).animate({
      opacity: "1"
    }, 2000, "linear", function() {
      $(this).css({
        'color': "#DCFF0E"
      });
    });
  };
  setInterval(cambio_color_arriba, 4000);

  //Genera números enteros aleatorios:
  function numero_entero_aleatorio(min, max) {
    min = Math.ceil(min);
    //Math.ceil(): Redondea un número hacia arriba al entero más cercano y devuelve el resultado, este trabaja con la propiedad "Math". Si el argumento pasado es un número entero, el valor no se redondeará.
    max = Math.floor(max);
    //Math.ceil(): Redondea un número hacia abajo al entero más cercano y devuelve el resultado, este trabaja con la propiedad "Math". Si el argumento pasado es un número entero, el valor no se redondeará.
    return Math.floor(Math.random() * (max - min)) + min;
    //Math.random(): Devuelve un número aleatorio entre 0 y 1, este numero podrá contener decimales
    //
  };


  //Obtiene filas de dulces o columas:
  function arreglo_filas_dulces(arrayType, index) {
    var columna_dulce1 = $(".col-1").children();
    var columna_dulce2 = $(".col-2").children();
    var columna_dulce3 = $(".col-3").children();
    var columna_dulce4 = $(".col-4").children();
    var columna_dulce5 = $(".col-5").children();
    var columna_dulce6 = $(".col-6").children();
    var columna_dulce7 = $(".col-7").children();
    //.children(): Nos permite buscar entre los elementos hijo de estos elementos en el árbol DOM y construir un nuevo objeto jQuery a partir de los elementos coincidentes.

    var columnas_dulces = $([columna_dulce1, columna_dulce2, columna_dulce3, columna_dulce4, columna_dulce5, columna_dulce6, columna_dulce7]);

    if (typeof index === "number") {
      var fila_dulce = $([columna_dulce1.eq(index), columna_dulce2.eq(index), columna_dulce3.eq(index), columna_dulce4.eq(index), columna_dulce5.eq(index), columna_dulce6.eq(index), columna_dulce7.eq(index)]);
      //eq(): Devuelve un elemento con un número de índice específico de los elementos seleccionados.
    } else {
      index = '';
    };
    if (arrayType === "columns") {
      return columnas_dulces;
    } else if (arrayType === "rows" && index !== "") {
      return fila_dulce;
    };
  };

  //Filas:
  function filas_dulces(index) {
    var fila_dulce = arreglo_filas_dulces("rows", index);
    return fila_dulce;
  };

  //Columnas:
  function columnas_dulces(index) {
    var columna_de_dulce = arreglo_filas_dulces("columns");
    return columna_de_dulce[index];
  };


});
