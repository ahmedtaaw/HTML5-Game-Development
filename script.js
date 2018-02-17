
var img = null;
var context = null;
var canvas = null;
var frameRate= 1000/30;
var frame=0;
var assets = ["images/char-horn-girl.png","images/char-princess-girl.png"];

var frames=[];

var onImageLoad = function(){
	console.log("image");
};

var setup = function(){
	canvas = document.getElementById('my_canvas');
	context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	for(var i=0;i<assets.length;i++){
		frames.push(new Image());
		frames[i].onload = onImageLoad;
		frames[i].src=assets[i];
	}
	setInterval(animate,frameRate);

};

var animate = function (){
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(frames[frame],101,171);
	frame = (frame+1)%frames.length;
};

setup();





