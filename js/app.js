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

  //Revisa si hay dulces que al coincidir se eliminaran en una columna:
  function validacion_de_columna() {
    for (var j = 0; j < 7; j++) {
      var counter = 0;
      var posicion_del_dulce = [];
      var extraposicion_del_dulce = [];
      var columna_de_dulce = columnas_dulces(j);
      var comparacion_valor = columna_de_dulce.eq(0);
      var brecha = false;
      for (var i = 1; i < columna_de_dulce.length; i++) {
        var srcComparison = comparacion_valor.attr("src");
        var source_dulce = columna_de_dulce.eq(i).attr("src");

        if (srcComparison != source_dulce) {
          if (posicion_del_dulce.length >= 3) {
            brecha = true;
          } else {
            posicion_del_dulce = [];
          };
          counter = 0;
        } else {
          if (counter == 0) {
            if (!brecha) {
              posicion_del_dulce.push(i - 1);
              //push(): Agrega nuevos elementos(los cuales están dentro del paréntesis) al final de un arreglo y devuelve la nueva longitud.
            } else {
              extraposicion_del_dulce.push(i - 1);
            };
          };
          if (!brecha) {
            posicion_del_dulce.push(i);
          } else {
            extraposicion_del_dulce.push(i);
          };
          counter += 1;
        };
        comparacion_valor = columna_de_dulce.eq(i);
      };
      if (extraposicion_del_dulce.length > 2) {
        posicion_del_dulce = $.merge(posicion_del_dulce, extraposicion_del_dulce);
        //merge() concatena el contenido de dos arreglos y lo fusiona en uno solo, en Javascript normal esta propiedad es concat()
      };
      if (posicion_del_dulce.length <= 2) {
        posicion_del_dulce = [];
      };
      conteo_de_dulces = posicion_del_dulce.length;
      if (conteo_de_dulces >= 3) {
        borrar_columna_dulce(posicion_del_dulce, columna_de_dulce);
        ajustar_marcador(conteo_de_dulces);
      };
    };
  };

  function borrar_columna_dulce(posicion_del_dulce, columna_de_dulce) {
    for (var i = 0; i < posicion_del_dulce.length; i++) {
      columna_de_dulce.eq(posicion_del_dulce[i]).addClass("delete");
    };
  };

  // Valida si hay dulces que deben eliminarse en una fila:
  function validacion_de_fila() {
    for (var j = 0; j < 6; j++) {
      var counter = 0;
      var posicion_del_dulce = [];
      var extraposicion_del_dulce = [];
      var fila_dulce = filas_dulces(j);
      var comparacion_valor = fila_dulce[0];
      var brecha = false;
      for (var i = 1; i < fila_dulce.length; i++) {
        var srcComparison = comparacion_valor.attr("src");
        var source_dulce = fila_dulce[i].attr("src");

        if (srcComparison != source_dulce) {
          if (posicion_del_dulce.length >= 3) {
            brecha = true;
          } else {
            posicion_del_dulce = [];
          }
          counter = 0;
        } else {
          if (counter == 0) {
            if (!brecha) {
              posicion_del_dulce.push(i - 1);
            } else {
              extraposicion_del_dulce.push(i - 1);
            }
          }
          if (!brecha) {
            posicion_del_dulce.push(i);
          } else {
            extraposicion_del_dulce.push(i);
          }
          counter += 1;
        }
        comparacion_valor = fila_dulce[i];
      }
      if (extraposicion_del_dulce.length > 2) {
        posicion_del_dulce = $.merge(posicion_del_dulce, extraposicion_del_dulce);
      }
      if (posicion_del_dulce.length <= 2) {
        posicion_del_dulce = [];
      }
      conteo_de_dulces = posicion_del_dulce.length;
      if (conteo_de_dulces >= 3) {
        borrado_horizontal(posicion_del_dulce, fila_dulce);
        ajustar_marcador(conteo_de_dulces);
      };
    };
  };

  function borrado_horizontal(posicion_del_dulce, fila_dulce) {
    for (var i = 0; i < posicion_del_dulce.length; i++) {
      fila_dulce[posicion_del_dulce[i]].addClass("delete");
    };
  };

  //Muestra la Puntuación:
  function ajustar_marcador(conteo_de_dulces) {
    var puntuacion = Number($("#score-text").text());
    switch (conteo_de_dulces) {
      case 3:
        puntuacion += 25;
        break;
      case 4:
        puntuacion += 50;
        break;
      case 5:
        puntuacion += 75;
        break;
      case 6:
        puntuacion += 100;
        break;
      case 7:
        puntuacion += 200;
    };
    $('#score-text').text(puntuacion);
  };

  //Inserta los caramelos en el tablero:
  function tablero() {
    rellenado_de_tablero();
  };

  function rellenado_de_tablero() {
    var top = 6;
    var column = $('[class^="col-"]');

    column.each(function() {
      var candys = $(this).children().length;
      var agrega = top - candys;
      for (var i = 0; i < agrega; i++) {
        var candyType = numero_entero_aleatorio(1, 5);
        if (i === 0 && candys < 1) {
          $(this).append('<img src="image/' + candyType + '.png" class="element"></img>');
        } else {
          $(this).find('img:eq(0)').before('<img src="image/' + candyType + '.png" class="element"></img>');
        }
      }
    });
    agregar_eventos_de_dulces();
    ajuste_de_validaciones();
  };

  //Borra los dulces que se tengan que eliminar:
  function ajuste_de_validaciones() {
    validacion_de_columna();
    validacion_de_fila();

    if ($("img.delete").length !== 0) {
      animacion_de_deshabilitar_evento_de_dulces();
    };
  };


  //Movimiento del los dulces por el usuario:
  function agregar_eventos_de_dulces() {
    $("img").draggable({
      containment: ".panel-tablero",
      droppable: "img",
      revert: true,
      revertDuration: 500,
      grid: [100, 100],
      zIndex: 10,
      drag: restringir_movimiento_dulces
    });
    $("img").droppable({
      drop: intercambiar_dulces
    });
    habilitar_eventos_de_dulces();
  };

  function deshabilitar_evento_de_dulces() {
    $("img").draggable("disable");
    $("img").droppable("disable");
  };

  function habilitar_eventos_de_dulces() {
    $("img").draggable("enable");
    $("img").droppable("enable");
  };

  //El dulce al moverlo es solido:
  function restringir_movimiento_dulces(event, arrastrado_de_dulces) {
    arrastrado_de_dulces.position.top = Math.min(100, arrastrado_de_dulces.position.top);
    arrastrado_de_dulces.position.bottom = Math.min(100, arrastrado_de_dulces.position.bottom);
    arrastrado_de_dulces.position.left = Math.min(100, arrastrado_de_dulces.position.left);
    arrastrado_de_dulces.position.right = Math.min(100, arrastrado_de_dulces.position.right);
  };

  //Reemplaza a los caramelos anteriores:
  function intercambiar_dulces(event, arrastrado_de_dulces) {
    var arrastrado_de_dulces = $(arrastrado_de_dulces.draggable);
    var src_arrastrar = arrastrado_de_dulces.attr("src");
    var candyDrop = $(this);
    var dropSrc = candyDrop.attr("src");
    arrastrado_de_dulces.attr("src", dropSrc);
    candyDrop.attr("src", src_arrastrar);

    setTimeout(function() {
      tablero();
      if ($("img.delete").length === 0) {
        arrastrado_de_dulces.attr("src", src_arrastrar);
        candyDrop.attr("src", dropSrc);
      } else {
        actualizacion_de_movimientos();
      }
    }, 500);

  };

  function tableroPromise(resultado) {
    if (resultado) {
      tablero();
    };
  };

  //Valida los puntos de los elementos en linea:
  function actualizacion_de_movimientos() {
    var valor_actual = Number($("#movimientos-text").text());
    var resultado = valor_actual += 1;
    $("#movimientos-text").text(resultado);
  };

  //Eliminación automática de Dulces:
  function animacion_de_deshabilitar_evento_de_dulces() {
    deshabilitar_evento_de_dulces();
    $("img.delete").effect("pulsate", 400);
    $("img.delete").animate({
      opacity: "0"
    }, {
      duration: 300
    }).animate({
      opacity: "0"
    }, {
      duration: 400,
      complete: function() {
        borrado_de_dulces()
          .then(tableroPromise)
          .catch(muestra_de_error);
      },
      queue: true
    });
  };

  //Llenado de elementos de espacios:
  function muestra_de_error(error) {
    console.log(error);
  };

  function borrado_de_dulces() {
    return new Promise(function(resolve, reject) {
      if ($("img.delete").remove()) {
        resolve(true);
      } else {
        reject("No se elimino los dulces");
      }
    });
  };

  //Final del juego:
  function fin_del_juego() {
    $("div.panel-tablero, div.time").effect("fold");
    $("h1.main-titulo").addClass("title-over").text("Fin del Juego");
    $("div.score, div.moves, div.panel-score").width("100%");
  };

  //Inicia/Reinicia el Juego:
  function inicio_de_juego() {
    $(".btn-reinicio").click(function() {
      if ($(this).text() === "Reiniciar") {
        location.reload(true);
        //Este va a recargar la pagina
      }
      tablero();
      $(this).text("Reiniciar");
      $("#timer").iniciar_temporizador({
        onComplete: fin_del_juego
      })
    });
  };

  inicio_de_juego();

});
