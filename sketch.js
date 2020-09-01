//Create variables here
var dog, Dog, happyDog, database, foodS, food, foodStock;
function preload()
{
  //load images here
  Dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  
  
}

function setup() {
 
	createCanvas(500,500);
  dog = createSprite(250,250,20,20);
  dog.addImage("dog",Dog);
  dog.addImage("happy",happyDog);
  dog.scale = 0.5;
  database = firebase.database();
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
  background("46,139,87");
  
  if(keyWentDown(UP_ARROW)){
      writeStock(food);
      dog.changeImage("happy", happyDog);
  }
  if(keyWentUp(UP_ARROW)){
    dog.changeImage("dog",Dog);
  }

  drawSprites();
  //add styles here
  fill("black");
text("Food Remaining= "+food,200,200);

}
function readStock(data){
  food=data.val();
}
function writeStock(x){
  x = x-1;
  database.ref("/").update({
    food:x,
  })
}



