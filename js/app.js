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


};
// Draw the enemy on the screen, required method for game

var Player = function(){
	Enemy.call(this, 202, 391, 101);
	this.yDir = 83;
	this.sprite = "images/char-boy.png"
};

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function(){
		this.handleInput();
		console.log(this.x + " " +this.y);
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
			this.y += 83;
		}else if(this.x < 0){
			this.x += 101;
		}else if(this.x > 404){
			this.x -= 101;
		}else if(this.y > 391){
			this.y -= 83;
		}
}

var allEnemies = [new Enemy(-201, 225, 110), new Enemy(-201, 142, 50),new Enemy(-403, 142, 50), new Enemy(-202, 59, 200)];
var player = new Player();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



 function checkCollisions(){
        allEnemies.forEach(function(enemy){
            if(player.x > Math.ceil(enemy.x)-50 && player.x < Math.ceil(enemy.x)+60
                     && player.y === enemy.y){
                player.x = 202;
                player.y = 391; 
            }
        });
    }

   
function checkFinish(){
    if(player.y == -24){
        player.x = 202;
        player.y = 391;
    }
} 