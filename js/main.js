var canvas = document.getElementById('game-canvas');
var context = canvas.getContext('2d');

var radius = 70;


function adaptToSize(){
	canvas.width  =  window.innerWidth;
	canvas.height = window.innerHeight;
}

adaptToSize();

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();


var Ball = function(x, y){	
	this.x = x;
	this.y = y;
}

Ball.prototype = (function(){
	
	var privado = function(){
		console.log("PRIVADO");
	};
	
	var publicoInternal = function(){
		console.log("PÚBLICO");
		privado();
	};
	
	return {publico : publicoInternal};
})();

var ball1 = new Ball();

ball1.publico();
ball1.privado();