// Enemies our player must avoid
var Enemy = function(x, y, xDir) {
    this.x = x;
    this.y = y;
    this.xDir  = xDir;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = {
	update : function(dt) {
    this.x = this.x + dt* this.xDir;
    	if(this.x  > 700){
    		this.x =-201;
    	}
  
	},
	render : function() {
    	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}


}
// Draw the enemy on the screen, required method for game

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
		if(this.y < -24){
			this.y += 83;
		}else if(this.x < 0){
			this.x += 101;
		}else if(this.x > 404){
			this.x -= 101;
		}else if(this.y > 391){
			this.y -= 83;
		}
	}
}


var Jewelry = function(){
	this.x = Math.floor(Math.random()*5) * 101;
	this.y = Math.floor(Math.random()*4) * 83;

	var rand = Math.floor(Math.random()*3)+1;
	var sprite = "";
	if(rand == 1){
		sprite = 'images/Gem-Blue.png';
	}else if(rand == 2){
		sprite = 'images/Gem-Green.png';
	}else if(rand == 3){
		sprite = 'images/Gem-Orange.png';
	}
	this.sprite = sprite;

}

Jewelry.prototype ={
	render : function(){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 60, 60);
	}
}

var allEnemies = [new Enemy(-201, 225, 110), new Enemy(-201, 142, 50),new Enemy(-403, 142, 50), new Enemy(-202, 59, 200)];
var player = new Player();
var allJeweries = [];
for(var i = 0; i < 5; i++){
	allJeweries.push(new Jewelry());
}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
