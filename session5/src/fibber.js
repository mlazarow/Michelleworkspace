

var fibber = {};


fibber.initialize = function(){

	
	$("#startbtn").click(function(){
		fibber.viewStatement();	
	});


	
	$(".truth-btn").click(function(){
		fibber.processDecision("truth");	
	});
	$(".fib-btn").click(function(){
		fibber.processDecision("fib");
	});

};





fibber.viewStatement = function(){

	
	var statementText = "coding is hard.";
	var statementContext = "-Michelle Lazarow, 2016"

	$("#statement-text").text(statementText);
	$("#statement-context").text(statementContext);

};



 
fibber.processDecision = function(decision){

	
	if(decision == "truth"){
		alert("yup. the thought power needed is very high");
	}
	if(decision == "fib"){
		alert("kudos on the confidence, but no. it is quite hard.");
	}

};











/*

---------------------------------IGNORE ALL OF THIS-------------------

fibber.viewStatement = function(){
};

fibber.processDecision = function(decision){
}

fibber.log = function(msg){
	console.log(msg);
};

fibber.loadRemoteContent = function(callback){
	
};



fibber.loadViewStatementPanel = function(){
	fibber.log("view: loadViewStatementPanel() called..");

	//setup the fib and truth buttons
	$(".fib-btn").off().on("tap", function(){
		fibber.processDecision('fib');
	});
	$(".truth-btn").off().on("tap", function(){
		fibber.processDecision('truth');
	});

	//display the current statement
	fibber.viewStatement();
};

fibber.loadInstructionsPanel = function(){
	fibber.log("view: loadInstructionsPanel() called..");

	//assume player is restarting the session
	//1. clear all variables holding session data
	fibber.clintonCounter = 0;
	fibber.trumpCounter = 0;
	fibber.activeCharacter = "";
	fibber.clintonLives = 5;
	fibber.trumpLives = 5;
	fibber.playerLives = 5;

	//2. reset any visuals that were moved/modified
};


fibber.viewFeedback = function(title, msg){

	$.afui.popup( {
	   title:title,
	   message:msg,
	   cancelText:"CONTINUE",
	   cancelCallback: function(){
	   	fibber.viewStatement();
	   },
	   cancelOnly:true
	 });

};

//setup custom on screen load functionality
	$("#instructions").on("panelload", function(){fibber.loadInstructionsPanel();});
	$("#viewstatement").on("panelload", function(){fibber.loadViewStatementPanel();});

*/