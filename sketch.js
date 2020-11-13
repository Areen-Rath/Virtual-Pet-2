var dog, dogImage, happyDog;
var food;

var database, foodStock;

var hour;

var feedDog, addFood;

function preload()
{
  
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {

  createCanvas(800, 500);

  dog = createSprite(700, 250, 20, 20);
  dog.addImage(dogImage);
  dog.scale = 0.1;
  
  database = firebase.database();

  food = new Food();

  fS = food.foodStock;

  feedDog = new Button("Feed Bobby");
  feedDog.button.position(650, 85);

  addFood = new Button("Add Food");
  addFood.button.position(750, 85);

  food.getFoodStock();
  
}


function draw() {  

  background(46, 139, 87);

  food.display();

  feedDog.button.mousePressed(() => {
    food.deductFood();
    food.updateFoodStock();
    dog.addImage(happyDog);
  })

  addFood.button.mousePressed(() => {
    if(fS < 20){
      fS += 1;
    }
    food.updateFoodStock();
  })

  drawSprites();

}