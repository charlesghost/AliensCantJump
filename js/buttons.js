$(function(event){


    // Hide elements 
    $(document).ready(function(){
    	$("#goback").hide();
    	$("#instructionsdetail").hide();
    });

    // Start Game
    $(document).ready(function(){
    	$("#startbutton").click(function(){
    		window.location.href='game.html';
    	});
    });
    
    // Instructions
    $(document).ready(function(){
    	$("#instructions").click(function(){
    		$("#startbutton").hide();
    		$("#instructions").hide();
    		$("#splash").hide();
    		$("#goback").show();
    		$("#instructionsdetail").show();
    	});
    });

	// Go back from "Instructions" to "Main Menu"

	$(document).ready(function(){
		$("#goback").click(function(){
			$("#goback").hide();
			$("#instructionsdetail").hide();
			$("#startbutton").show();
			$("#instructions").show();
			$("#splash").show();
		});
	});

	// "Game over" buttons 
	
	$(document).ready(function(){
		$("#yes").click(function(){
			window.location.href='game.html';
		});
	});

	$(document).ready(function(){
		$("#no").click(function(){
			window.location.href='index.html';
		});

	});

	// "You win" buttons

	$(document).ready(function(){
		$("#playagain").click(function(){
			window.location.href='game.html';
		});

	});

	$(document).ready(function(){
		$("#gobackwin").click(function(){
			window.location.href='index.html';
		});

	});

})