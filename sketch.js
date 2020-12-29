var thief;
var laser1,laser2,laser3;
var obstacle1,obstacle2,obstacle3;
var police;
var wall1,wall2,wall3,wall4,wall5,wall6;

function setup(){
createCanvas(600,600)

thief = createSprite(0,600,30,30);
laser1 = createSprite(500,300,400,10);
laser1.shapeColor ="red";
laser2 = createSprite(200,100,10,300);
laser2.shapeColor = "red";
laser3 = createSprite(500,10,30,70);
laser3.visible = false;


obstacle1 = createSprite(200,400,10,100);


}

function draw(){
background("white");



drawSprites();





}