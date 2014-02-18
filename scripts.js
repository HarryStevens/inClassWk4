/**
 * @author Hazard
 */
console.log('testing js');

/*
 * This is my custom "dataLoaded" function.
 */
function dataLoaded(){
	
	console.log('i got to document ready!!!');
	
	//use jQuery to create a new div element
	var myDiv = $("<div>")
}

/*
  * Document ready happens when the entire webpage has loaded.
  * When that happens, I want to initiate the "dataLoaded" function
  * that I defined above.
  */
$( document ).ready(dataLoaded);

/*
 * This console log statement, while physically below the dataLoaded console log,
 * will load before it because dataLoaded won't work until the document is ready.
 */
console.log('this should happen before document ready');