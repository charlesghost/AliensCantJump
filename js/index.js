$(function(event){


    // Create Player + Controls
// Create multiple platorms with possible collision

// Variables 

var gravity = 1;
var maxheight;
var velocity = 0;
var coll = setInterval(col, 5);

//var Player = document.getElementById("player");
//var Platform = document.getElementById("platform");

var player = $("#player");
var platform = $("#platform1");
/*
setInterval(function(){
    console.log($(player).collision(platform));
}), 1;
*/
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



// Collision Code

/*


function checkb(cb) {
  return cb == "b";
}

function checkr(cr) {
  return cr == "r";
}

function checkl(cl) {
  return cl == "l";
}

function checkt(ct) {
  return ct == "t";
}

function checke(ce) {
  return ce == "e";
}    

function col(){
    var c = [colCheck($('#player'), $('#platform1')), colCheck($('#player'), $('#platform2')), colCheck($('#player'), $('#platform3')), colCheck($('#player'), $('#platform4')), colCheck($('#player'), $('#platform5')), colCheck($('#player'), $('#platform6'))];

  var col = collision($('#player'), $('#platform1'));
  var col1 = collision($('#player'), $('#platform2'));
  if (col == true || col1 == true) {
    self.location['replace'](location);
    clearInterval(coll);
  }
  if (c.some(checkr)) {
    $('#player').css("left", '-=15');
  }
  if (c.some(checkl)) {
    $('#player').css("left", '+=15');
  }
  if (c.some(checkt)) {
    $('#player').css("top", '+=45');
  }
  if (!c.some(checkb)) {
    $('#player').css("top", '+=2');
  }
}


function collision($div1, $div2) {
  var x1 = $div1.offset().left; // Block left
  var y1 = $div1.offset().top; // Block top
  var h1 = $div1.outerHeight(true); // Block height
  var w1 = $div1.outerWidth(true); // Block width
  var b1 = y1 + h1; // Block bottom ********
  var r1 = x1 + w1; // Block right
  var x2 = $div2.offset().left; // Platform left
  var y2 = $div2.offset().top; // Platform top **********
  var h2 = $div2.outerHeight(true); // Platform height
  var w2 = $div2.outerWidth(true); // Platform width
  var b2 = y2 + h2; // Platform bottom
  var r2 = x2 + w2; // Platform right

  //if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  if (b1 > y2 && r1 < r2 && l1 > l2) return false;
  return true;
}

function colCheck($div1, $div2) {
  // get the vectors to check against
  var vX = ($div1.offset().left + ($div1.outerWidth(true) / 2)) - ($div2.offset().left + ($div2.outerWidth(true) / 2)),
    vY = ($div1.offset().top + ($div1.outerHeight(true) / 2)) - ($div2.offset().top + ($div2.outerHeight(true) / 2)),
    // add the half widths and half heights of the objects
    hWidths = ($div1.outerWidth(true) / 2) + ($div2.outerWidth(true) / 2),
    hHeights = ($div1.outerHeight(true) / 2) + ($div2.outerHeight(true) / 2),
    colDir = "e";

  // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
  if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
    // figures out on which side we are colliding (top, bottom, left, or right)
    var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
    if (oX >= oY) {
      if (vY > 0) {
        colDir = "t";
        $div1.offset().top += oY;
      } else {
        colDir = "b";
        $div1.offset().top -= oY;
      }
    } else {
      if (vX > 0) {
        colDir = "l";
        $div1.offset().left += oX;
      } else {
        colDir = "r";
        $div1.offset().left -= oX;
      }
    }
  }
  return colDir;
}


*/
// Game Screen
/*
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

*/


})






	


