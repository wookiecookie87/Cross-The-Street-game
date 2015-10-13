// Enemies our player must avoid
var Enemy = function(x, y, xDir) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.xDir  = xDir;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype = {
	update : function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + dt* this.xDir;
    	if(this.x  > 700){
    		this.x =-201;
    	}
  
	},

}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	this.x = 202;
	this.y = 391;
	this.yDir = 83;
	this.xDir = 101;
	this.sprite = "images/char-boy.png"
}

Player.prototype = {
	update : function(){
		this.handleInput();
		this.showLocation();
	},
	render : function(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	},
	handleInput : function(keyCode){
		if(keyCode === 'down'){
			this.y += this.yDir;
		}else if(keyCode === "left"){
			this.x -= this.xDir;
		}else if(keyCode === "up"){
			this.y -= this.yDir;
		}else if(keyCode === "right"){
			this.x += this.xDir;
		}	
		this.checkBorder();
	},
	checkBorder : function(){
		if(this.y < -24 || this.x < 0 || this.x > 404 || this.y >391){
			alert("out");
		}
	},
	showLocation : function(){
		console.log("X : "+this.x + "  Y : " + this.y);
	}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(-201, 225, 110), new Enemy(-201, 142, 50),new Enemy(-403, 142, 50),
 new Enemy(-202, 59, 200)];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
