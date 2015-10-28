var gameComps = {
	
	numRows : 6,
	numCols : 5,
	xUnit : 101,
	yUnit : 83,
	yErr : 59,
	jewelSprite : ['images/Gem-Blue.png',
        			'images/Gem-Green.png',
        			'images/Gem-Orange.png'],
	//coords : {},

	checkCollisions : function(playerObj, allEnemiesArr){
        allEnemiesArr.forEach(function(enemy){
            if(playerObj.x > Math.ceil(enemy.x)-50 && playerObj.x < Math.ceil(enemy.x)+60
                     && playerObj.y === enemy.y){
                playerObj.x = 202;
                playerObj.y = 391; 
            }
        });
    },

	getRandomInt : function (min, max){
		return Math.floor(Math.random()*(max - min + 1)) + min;
	},

	getxPosition : function(xGrid){
		return xGrid * this.xUnit;
	},

	getyPosition : function(yGrid){
		return yGrid * this.yUnit + this.yErr;
	},
	checkFinish : function (PlayerObj){
	    if(PlayerObj.y == -24){
	        PlayerObj.x = this.getxPosition(2)  //202;
	        PlayerObj.y = this.getyPosition(4);
	    }
	}, 

	getDiffCoords : function(){
		var xArr = [];
		var yArr = [];
		var x = 0;
		var y = 0;
		var i = 0;
		while(i < 6){
			console.log("begin : "+i);
			var x = this.getRandomInt(0, 4);
			var y = this.getRandomInt(1, 3);	
			if(i > 0){
				for(var j = 0; j < xArr.length; j++){
					if(xArr[j] == x && yArr[j] == y){
						continue;
						console.log("inside "+j+" "+i);
					}
				}
				xArr.push(x);
				yArr.push(y);
				console.log("outside "+i);
				console.log(x+" "+y);
				i++;
			}else{
				i++;
			}

			console.log("complete outside "+i);
		}
		console.log("Done "+i);
		coords ={
			xCoords : xArr,
			yCoords : yArr
		}
		return coords;
	}
}