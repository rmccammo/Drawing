$(document).ready(function(){
	console.log("Hello");
	makeGrid(16);

	//When the reset button is clicked, clear the wrapper and
	//make a new grid of the requested size
	$('#resetButton').click(function(){
		$('#wrapper').empty();

		var newGridSize = prompt("Enter a new grid size");
		makeGrid(newGridSize);
	});
});

//Fill the wrapper with a grid of n divs
function makeGrid(n){
	for(var x = 0; x < n; x++){
		var row = $('<div class="row"></div>')
		row.appendTo('#wrapper');
		for(var y = 0; y < n; y++){
			var unit = $('<div class="unit"></div>');
			//unit.appendTo('#wrapper');
			unit.appendTo(row);
		}
	}

	var size = 960/n;
	$(".unit").width(size).height(size);
	
	//All units will change color when hovered over
	$('.unit').hover(function(){
		$(this).addClass("paintedUnit");
	});

}