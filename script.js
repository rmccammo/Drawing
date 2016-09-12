$(document).ready(function(){
	console.log("Hello");

	for(var x = 0; x < 16; x++){
		var row = $('<div class="row"></div>')
		row.appendTo('#wrapper');
		for(var y = 0; y < 16; y++){
			var unit = $('<div class="unit">Unit</div>');
			//unit.appendTo('#wrapper');
			unit.appendTo(row);
		}
	}
});