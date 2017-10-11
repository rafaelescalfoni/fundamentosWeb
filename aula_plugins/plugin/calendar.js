var evento = {id:1
		, nome: "Evento XPTO"
		, data: "2017-10-09"
		, horario_inicio: "10:15"
		, horario_fim: "11:30"
		, tipo: "palestra"};

var evento2 = {id:2
		, nome: "Palestra ABC"
		, data: "2017-10-09"
		, horario_inicio: "8:10"
		, horario_fim: "9:10"
		, tipo: "palestra"};

var eventoArray = [evento, evento2];

$(function(){
	function criaLinha(hora) {
		return "<div class='calendar-line'><div class='calendar-time'>"+hora+":00</div><div class='calendar-grid'></div>";
	}

	function criaEvento(evento, horaInicial){
		var $evento = $("<div/>")
						.addClass("calendar-event")
						.addClass(evento.tipo)
						.attr("id", "evento_"+evento.id)
						.text(evento.nome);

		var inicioArray = evento.horario_inicio.split(":");
		var fimArray = evento.horario_fim.split(":");

		var inicioMinuto = inicioArray[0]*60 + parseInt(inicioArray[1]);
		var fimMinuto = fimArray[0]*60 + parseInt(fimArray[1]);
		var duracao = (fimMinuto - inicioMinuto);
		var topo = parseInt(inicioArray[1])+ (parseInt(inicioArray[0]) - horaInicial) * parseInt($(".calendar-line").css("height"));
		$evento.css({top: topo, height: duracao});
		return $evento;
	}

	function carregaLinhas(qtdLinhas, horaInicial, eventoArray) {
		for(var i=0; i<qtdLinhas; i++){
			var $linha = criaLinha(horaInicial+i);
			$(".calendar-body").append($linha);
		}
		for(var i=0; i<eventoArray.length; i++) {
			$(".calendar-body")
				.append(criaEvento(eventoArray[i], horaInicial));	
		}
		
	}

	$(".calendar")
		.append($("<div />").addClass("calendar-date").text("Segunda-feira, 9/10/2017"))
		.append($("<div/>").addClass("calendar-body"));

	carregaLinhas(6, 8, eventoArray);
});