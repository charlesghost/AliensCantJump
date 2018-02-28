
// Create Player + Controls
// Create multiple platorms with possible collision

// Variables 

var gravity = 1;
var maxheight;
var velocity = 0;

var Player = document.getElementById("player");
var Platform = document.getElementById("platform");


// Gravity variables 

maxheight = Math.round($("#wrapper").height() - $("#player").height());

timer = setInterval(update, 1000/60);


// Keypad 

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#player').stop().animate({
            left: '-=30'
        }); //left arrow key
        break;
    case 38:
        $('#player').stop().animate({
            top: '-=30'
        }); //up arrow key
        break;
    case 39:
        $('#player').stop().animate({
            left: '+=30'
        }); //right arrow key
        break;
    case 40:
        $('#player').stop().animate({
            top: '+=30'
        }); //bottom arrow key
        break;
    }
})

// Game conditions

if ($("#player").offset() == "500"){

	alert("Game Over!")
}

// Player Gravity

function update() {
	if (velocity === 0 && $("#player").position().top === maxheight) {
	} else if (velocity > 0 && $("#player").position().top >= maxheight) {
		$("#player").css("bottom", maxheight + "px");
		velocity = 0;
	} else {
		velocity += gravity;
		var newPos = $("#player").position().top + velocity + "px";
		$("#player").css("top", newPos);
		velocity = 1;
		
	}
};


// Game Screen

var game = function(_gameDiv) {

	var that = this;
	
	var SCREEN_WIDTH = 400;
    var SCREEN_HEIGHT = 700;

	this.width = SCREEN_WIDTH;
	this.height = SCREEN_HEIGHT;


	var gamePlatform = _gameDiv;

	var touchElement = document.createElement('div');

	    gamePlatform.style.width = that.width + 'px';
        gamePlatform.style.height = that.height + 'px';
        gamePlatform.style.position = 'relative';
        gamePlatform.style.margin = '10px auto';
        gamePlatform.style.border = '1px solid black';

        var gameDiv = document.createElement('div');

        gameDiv.style.width = that.width + 'px';
        gameDiv.style.height = that.height + 'px';
        gameDiv.style.position = 'relative';
        gameDiv.style.opacity = 1;
        gameDiv.style.overflow = 'hidden';
        

        gamePlatform.appendChild(gameDiv);

        
        


}






	


