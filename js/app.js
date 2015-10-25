
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
    		this.x = gameComps.getxPosition(-2);
    	}
  
	},
	render : function() {
    	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}


};
// Draw the enemy on the screen, required method for game

var Player = function(){
	Enemy.call(this, gameComps.getxPosition(2), gameComps.getyPosition(4), 101);
	this.yDir = 83;
	this.sprite = "images/char-boy.png"
};

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function(){
		this.handleInput();
	//	console.log(this.x + " " +this.y);
}

Player.prototype.handleInput = function(keyCode){
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
}

Player.prototype.checkBorder = function(){
		if(this.y < -24){
			this.y += yUnit;
		}else if(this.x < 0){
			this.x += xUnit;
		}else if(this.x > 404){
			this.x -= xUnit;
		}else if(this.y > 391){
			this.y -= yUnit;
		}
}

var Jewelry = function(x, y, sprite){
	Enemy.call(this, x, y);
	this.sprite = sprite;
}

Jewelry.prototype = Object.create(Enemy.prototype);
Jewelry.prototype.constructor = Jewelry;


var allEnemies = [new Enemy(gameComps.getxPosition(-2), gameComps.getyPosition(2), 100), 
				 new Enemy(gameComps.getxPosition(-2), gameComps.getyPosition(1), 50),
				 new Enemy(gameComps.getxPosition(-4), gameComps.getyPosition(1), 50),
				 new Enemy(gameComps.getxPosition(-2), gameComps.getyPosition(0), 200)];
var player = new Player();
var coords = gameComps.getDiffCoords();
console.log(coords);
var allJewelries = [];
for(var i = 0; i < 5; i++){
	var rand = gameComps.getRandomInt(0, 2);
	var x = gameComps.getxPosition(coords.xCoords[i]); 
	var y = gameComps.getyPosition(coords.yCoords[i]);
	var sprite = gameComps.jewelSprite[rand];
	allJewelries.push(new Jewelry(x, y, sprite));
	console.log("coords :  X " +x +"  "+coords.xCoords[i]+ " Y "+ y +"  "+coords.yCoords[i])
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



