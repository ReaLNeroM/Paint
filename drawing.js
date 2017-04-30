var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var cursorX = -1;
var cursorY = -1;
var mouse_clicked = false;

document.onmousedown = function(){
	mouse_clicked = true;
}

document.onmouseup = function(){
	mouse_clicked = false;
}

document.onmousemove = function(e){
	if(mouse_clicked && cursorX != -1 && cursorY != -1){
		ctx.beginPath();
		ctx.moveTo(cursorX, cursorY);
		ctx.lineTo(e.pageX, e.pageY);
		ctx.stroke();
	}
	cursorX = e.pageX;
	cursorY = e.pageY;
};
