$(document).ready(function(){

//Cambio de Color a Titulo:
function cambio_color_arriba(){

		$("h1.main-titulo").animate({
			opacity: "1"
			//No se puede quedar sin no cambiar alguna propiedad CSS por ello se pone esta que no afecta
		},2000,"linear",function(){
			$(this).css({'color': "white"});
		}).animate({
			opacity: "1"
		},2000,"linear",function(){
			$(this).css({'color': "#DCFF0E"});
		});

	};
	setInterval(cambio_color_arriba,4000);

});