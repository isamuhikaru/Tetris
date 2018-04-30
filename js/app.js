$(document).ready(function(){

//Cambio de Color a Titulo:
	function cambio_color(){

		function cambio_color_blanco(){
			$(".main-container > h1").removeClass("main-titulo");
			$(".main-container > h1").addClass("main-titulo-blanco");
		};

		setTimeout(cambio_color_blanco,1000);
			
			function cambio_color_verde(){
			$(".main-container > h1").removeClass("main-titulo-blanco");
			$(".main-container > h1").addClass("main-titulo");
		};

		setTimeout(cambio_color_verde,2000);

	};

	setInterval(cambio_color,4000);


// //Cambio de Color a Titulo B:
// 	function cambio_color_titulo(){
		
// 		$(".main-titulo").animate({
// 			color: "white"
// 		}, 1000, function(){
// 			$(".main-titulo").animate({
// 				color: "#DCFF0E"
// 			},1000);
// 		});

// 	};

// 	setInterval(cambio_color_titulo,4000);

});