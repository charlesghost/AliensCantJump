$(function(event){


    // Create Player + Controls
// Create multiple platorms with possible collision

// Variables 

var gravity = 1;
var maxheight;
var velocity = 0;

var player = $("#player");
var platform = $("#platform1");

var currentPos = $('#player').position().top;


// Collision Code

setInterval(function(){
  var collision = $(player).collision(platform);
  // get the player div's current top position and store in variable
  var currentPos = $('#player').position().top;

  if(collision.length > 0){
    currentPos -= 15;
    // target the player's top position and give it a value of it's current top position + 10p
    $("#player").css('top', currentPos + "px");      
}

}), 1;


// Gravity variables 

maxheight = Math.round($("#wrapper").height() - $("#player").height());

timer = setInterval(update, 1000/60);

$("#platform1").click(function(){
    console.log("YEAH");
});


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

})






	


