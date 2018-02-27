
// Create Player + Controls
// Create multiple platorms with possible collision




var Player = document.getElementById("player");

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#player').stop().animate({
            left: '-=10'
        }); //left arrow key
        break;
    case 38:
        $('#player').stop().animate({
            top: '-=10'
        }); //up arrow key
        break;
    case 39:
        $('#player').stop().animate({
            left: '+=10'
        }); //right arrow key
        break;
    case 40:
        $('#player').stop().animate({
            top: '+=10'
        }); //bottom arrow key
        break;
    }
})

var game = function(_gameDiv) {

	var that = this;
	var interval = 20;
	var setTimeInterval;

	var SCREEN_WIDTH = 400;
    var SCREEN_HEIGHT = 500;

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






	


