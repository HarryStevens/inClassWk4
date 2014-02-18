/**
 * @author Hazard
 */
console.log('testing js');

/*
 * This function will load the json file
 */
function loadedJSON(FREDdata){
	//console log the "count" property of our FREDdata object.
	console.log(FREDdata.count);
	
}//end loadedJSON

/*
 * This is my custom "dataLoaded" function.
 */
function dataLoaded(){
	
	//testing document ready
	console.log('i got to document ready!!!');
	
	//use jQuery to create a new div element
	var myDiv = $("<div>");
	
	//jQuery, take that div I just created called "myDiv"
		//and add some html to it with just some text.
	$(myDiv).html("This is my new div");
	
	//jQuery, grab the div with the id "contentContainer"
		//and put the new div inside it.
	$("#contentContainer").append(myDiv);
	
	//use the jQuery get function to load my JSON file, takes 3 parameters
		//"file name", function to call once file is loaded, string of the file type to expect
	$.get("UEMP270V_data.json", loadedJSON, "json");

}//end dataLoaded

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