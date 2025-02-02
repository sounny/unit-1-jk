// Script to display City Size and Add Mouseover Effects

// Declaring a variable CityPop that holds information from an Array of Objects, with each Object consisting city name and city population.
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209,
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// Defining a function called addColumns to...add a column. 
function addColumns(cityPop){
// Select all table row elements <tr>, with plans to iterate through each of them (forEach).
    document.querySelectorAll("tr").forEach(function(row, i){
// In Table Row zero, we are inserting a Table Header, called City Size, next to the existing headers (City & Population) defined in Index.HTML.
    	if (i == 0){
			
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {			
// Here we are defining a variable called City Size, which we will add as a column in the table.
    		var citySize;
// For any cityPop[i-1], i.e., for Row 1 of the table - the first data row - we grab cityPop[0] from the original array,
// e.g. Madison, and compare its population to 100000, 500000, etc. to determine City Size.
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
// We insert the City Size detrermined above before the end of the table.
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
    });
};
// Defining a function addEvents to facilitate mouseover of the table above.
function addEvents(){
// This selects the first matching table element from index.html and then an event listener is attached to this table.
// The event listener listens for when a user moves a mouse over the table.
	document.querySelector("table").addEventListener("mouseover", function() {
// This is a variable with the beginning of an rgb color value, e.g. rgb(255, 0, 0).
		var color = "rgb(";
// Defining a For Loop, beginning at 0, up to 2, for each of the 3 RGB values.
		for (var i=0; i<3; i++){
// Creating a variable called random, which holds a randomn number between 0 and 255.  
			var random = Math.round(Math.random() * 255);
// Adding the random number to our variable, color and setting it = to color again.
			color += random;
// Adding a comma after the first and second RGB values.
			if (i<2){
				color += ",";
// After the third RGB value, we have a complete RGB value so we close the parentheses. 
			} else {
				color += ")";
		}
	}
// Sets the background color for the first table found in index.html to the randomly generated color we just created, which is triggered on mouseover.
		document.querySelector("table").style.backgroundColor = color;
});

	function clickme(){

		alert('Hey, you clicked me!');
	};
// Attaches a clickme function for a click event on the table.
	document.querySelector("table").addEventListener("click", clickme);
}


// Call the functions when the page loads.  This is the reason that the addColumns function wasn't appending the City Size column, initially.
window.onload = function() {
	addColumns(cityPop);
	addEvents();
  };
