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


var currentPos = $('#player').position().top;

// Gravity variables 

maxheight = Math.round($("#wrapper").height() - $("#player").height());

timer = setInterval(update, 1000/60);

// Music for the game

$(document).ready(function(){
    $("#sound").get(0).play();
});


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
    var enemycollision2 = $('#player').collision('#enemy2')
    var enemycollision3 = $('#player').collision('#enemy3')
    var enemycollision4 = $('#player').collision('#enemy4')
    if(currentPos > 800){
        alert("Loser!");
        clearInterval(interval2);
    } else if(enemycollision.length > 0){
        alert("Loser!");
        window.location.reload();
    } else if(enemycollision2.length > 0){
        alert("Loser!");
        window.location.reload();
    } else if(enemycollision3.length > 0){
        alert("Loser!");
        window.location.reload();
    } else if(enemycollision4.length > 0){
        alert("Loser!");
        window.location.reload();
    }

}

// Platform/Player Animation

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

animate_loop2 = function animate_loop2(){
        $("#platform3").animate({
            bottom: "200px", 

          }, 1000,function(){
               $("#platform3").animate({bottom: "100px"},2000)
                 animate_loop2();
        } );    
}

animate_loop2();  

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

enemy_loop2 = function enemy_loop2(){
        $("#enemy2").animate({
            left: "-300px", 

          }, 1000,function(){
               $("#enemy2").animate({left: "300px"},3000)
                 enemy_loop2();
        } );    
}

enemy_loop2();  

enemy_loop3 = function enemy_loop3(){
        $("#enemy3").animate({
            left: "-470px", 

          }, 1000,function(){
               $("#enemy3").animate({left: "470px"},2000)
                 enemy_loop3();
        } );    
}

enemy_loop3();  

enemy_loop4 = function enemy_loop4(){
        $("#enemy4").animate({
            left: "300px", 

          }, 1000,function(){
               $("#enemy4").animate({left: "-300px"},3000)
                 enemy_loop4();
        } );    
}

enemy_loop4();  

});


// Collision Code

setInterval(function(){
  var collision = $("#player").collision("#platform1");
  var collision2 = $("#player").collision("#platform2");
  var collision3 = $("#player").collision("#platform3");
  var collision4 = $("#player").collision("#platform4");
  var collision5 = $("#player").collision("#platform5");
  var collision6 = $("#player").collision("#platform6");
  var collision7 = $("#player").collision("#platform7");
  var collision8 = $("#player").collision("#platform8");
  var collision9 = $("#player").collision("#platform9");
  var collision10 = $("#player").collision("#platform10");
  var collision11 = $("#player").collision("#platform11");
  var collision12 = $("#player").collision("#platform12");
  // get the player div's current top position and store in variable
  var currentPos = $('#player').position().top;

  if(collision.length > 0){
    currentPos -= 10;
    // target the player's top position and give it a value of it's current top position + 10p
    $("#player").css('top', currentPos + "px");    
} else if (collision2.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision3.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision4.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision5.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision6.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision7.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision8.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision9.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision10.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision11.length > 0){
    currentPos -= 10;
    $("#player").css('top', currentPos + "px");
} else if (collision12.length > 0){
    currentPos -= 10;
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










