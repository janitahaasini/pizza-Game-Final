var pizza;
var onion;
var dough;
var tomato;
var sauce;
var cheese;
var oregano;
var panner;
var chapati;
var topburgerBread;
var bottomburgerBread;
var chilliflakes;
var cookednoodles;
var tomato;
var springroll;
var bottomburgerbread;
var burger;
var noodles;

function preload() {
    pizzaImg=loadImage("sprites/pizza.png");
    burgerImg=loadImage("sprites/burger.png");
   noodlesImg=loadImage("sprites/noodles.png");
   springRollImg=loadImage("sprites/spring roll.png");
   doughImg=loadImage("sprites/dough.png")
   onionImg=loadImage("sprites/onion.png");
   tomatoImg=loadImage("sprites/tomato.png");
   sauceImg=loadImage("sprites/sauce.png");
   cheeseImg=loadImage("sprites/cheese.png");
   chapatiImg=loadImage("sprites/chapati .png");
   oreganoImg=loadImage("sprites/oregano.png");
   pannerImg=loadImage("sprites/panner.png");
   bottomburgerbreadImg=loadImage("sprites/bottom burger bread.png");
   topburgerbreadImg=loadImage("sprites/top burger bread.png");
   cookednoodlesImg=loadImage("sprites/cooked noodles.jpg");
   bgImg=loadImage("sprites/background.png")
}

function setup(){
    var canvas = createCanvas(600,600);
    form=new Form();

   

}

function draw(){
    background(bgImg);
  form.display();
drawSprites();
}
