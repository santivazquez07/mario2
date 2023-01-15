

function preload(){
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound ("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(850 , 400);
	video.parent('game_console');
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults);

}

function modelLoaded(){
	console.log("Modelo cargado");
}

function gotResults(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("La posicion de la nariz en x es: " + noseX );
		console.log("La posicion de la nariz en Y es: " + noseY );
	}
}

function draw() {
	game();
}






