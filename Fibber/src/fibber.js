
//varis used to create variables
//using the {} to create a variable that is type object
var fibber = {};

fibber.init = function(){


	$("#startbtn").on("click", fibber.start);
  
};

fibber.start = function (){
	alert ('START BUTTON WAS CLICKED');