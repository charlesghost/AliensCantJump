$(function(event){


    // Create Player + Controls
// Create multiple platorms with possible collision

// Variables 

var gravity = 1;
var maxheight;
var velocity = 0;

var player = $("#player");
var platform = $("#platform1");
var winner = $("#player").collision('#platform6');
var sound = $("#sound");

var currentPos = $('#player').position().top;

// Gravity variables 

maxheight = Math.round($("#wrapper").height() - $("#player").height());

timer = setInterval(update, 1000/60);



// Winning/Losing Conditions


var interval = null;
$(document).ready(function(){
  interval = setInterval(Winner, 1000);
});

var interval2 = null;
$(document).ready(function(){
    interval2 = setInterval(Loser, 1000);
})


function Winner(){
   var winner = $("#player").collision('#winnercoin');
   if(winner.length > 0){
   alert("Winner!");
   clearInterval(interval);
} 

}

function Loser(){
    var currentPos = $('#player').position().top;
    var enemycollision = $('#player').collision('#enemy1')
    if(currentPos > 700){
        alert("Loser!");
        clearInterval(interval2);
    } else if(enemycollision.length > 0){
        alert("Loser!");
    }

}

// Platoform/Player Animation

$(document).ready(function(){

animate_loop = function animate_loop(){
        $("#platform2").animate({
            bottom: "100px", 

          }, 1000,function(){
               $("#platform2").animate({bottom: "200px"},2000)
                 animate_loop();
        } );    
}

animate_loop();  

});

// Animate Enemies

$(document).ready(function(){

enemy_loop = function enemy_loop(){
        $("#enemy1").animate({
            left: "300px", 

          }, 1000,function(){
               $("#enemy1").animate({left: "-300px"},3000)
                 enemy_loop();
        } );    
}

enemy_loop();  

});


// Collision Code

setInterval(function(){
  var collision = $(player).collision(platform);
  var collision2 = $("#player").collision("#platform2");
  // get the player div's current top position and store in variable
  var currentPos = $('#player').position().top;

  if(collision.length > 0){
    currentPos -= 15;
    // target the player's top position and give it a value of it's current top position + 10p
    $("#player").css('top', currentPos + "px");    
} else if (collision2.length > 0){
    currentPos -= 15;
    // target the player's top position and give it a value of it's current top position + 10p
    $("#player").css('top', currentPos + "px");
}

}), 1;


// Keypad 

$(document).keydown(function(e) {
    switch (e.which) {
        case 65:
        $('#player').stop().animate({
            left: '-=30'
        }); //left arrow key
        break;
        case 87:
        $('#player').stop().animate({
            top: '-=30'
        }); //up arrow key
        break;
        case 68:
        $('#player').stop().animate({
            left: '+=30'
        }); //right arrow key
        break;
        case 83:
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










