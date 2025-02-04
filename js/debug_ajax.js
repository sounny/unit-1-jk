// This script grabs GeoJSON data related to 'Mega Cities' and displays in humanreadable format in a web browser.

// I moved this function to the top because it's more logical to me, but the order of declared functions 
// doesn't matter in JavaScript due to the concept of Hoisting.
// Defining a function to retrieve the GeoJSON data.
function debugAjax(){
	
	// var myData;  >> this is notnecessary unless it is needed in this function.
	// fetching the data from the correct location.
	fetch("data/MegaCitiesSavedinGeoJSON.geojson")
		// This handles the response from the fetch request, then passes to the debugCallback(response). 
		// I think this is what resolves the asynchronisity issue by waitning for the fetch request to complete before 
		// returning or resolving the promise.  I.e., waiting for all the GeoJSON data from the request to be available.
		.then(function(response){
			// The 'response' from the fetch request is automatically passed to debugCallabck, 
			// based on the syntax of the method. In this case the GeoJSON data is passed to debugCallback().
			debugCallback(response);
		})
	// This is not necessary here are myData is not defined here.
	// document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData))
};
// This callback function will handle the debugAjax() once it's completed.
function debugCallback(response){
	// Here we are parsing the response from our fetch into JSON.  Them, pass it to myData for use in the next line.
	response.json().then(function(myData) {
		// This is inserting the parsed data into a mydiv element in index.html, in a human readable format.
		// The null, 2 and pre, were intended to make the text block more readable, but didn't work as intended.
		document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData, null, 2)+ '</pre>');
	});
};
// Call debugAjax() to start the process
debugAjax();
