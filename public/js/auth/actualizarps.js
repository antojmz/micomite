var cambionacionalidad = function(){
	($("#spam_nacionalidad").text() == "V")?$("#spam_nacionalidad").text("E"):$("#spam_nacionalidad").text("V");
	$("#nacionalidad").val($("#spam_nacionalidad").text());
	$('#naci').val(  $("#spam_nacionalidad").text() + $("#cedula").val());
};

$(document).ready(function(){

	$('#cedula').on('keypress',function(e){
		$('#naci').val(  $("#spam_nacionalidad").text() + $("#cedula").val());
		if(e.which != 13){return};
		$('.vtCedula').blur();
		$('#buscar_registro').submit();
	});
	$( "#cedula" ).focusout(function() {
	    $('#naci').val(  $("#spam_nacionalidad").text() + $("#cedula").val());
	});
});