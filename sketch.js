
var background_img
var cat_running
var mouse_teasing



function preload() {
    //load the images here
    background_Img=loadImage("images/garden.png");
    cat_running=loadAnimation("images/cat2.png","images/cat3.png");
    cat_sitting=loadAnimation("images/cat1.png");
    cat_lastImg=loadAnimation("images/cat4.png");
    mouse_teasing=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse_first=loadAnimation("images/mouse1.png");
    mouse_last=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,700,10,10);
mouse=createSprite(200,700,10,10);

cat.addAnimation("cat_sitting",cat_sitting);
cat.addAnimation("cat_running",cat_running);
cat.addAnimation("cat_lastImg",cat_lastImg);
cat.scale=0.2

mouse.addAnimation("mouse_first",mouse_first);
mouse.addAnimation("mouse_teasing",mouse_teasing);
mouse.addAnimation("mouse_last",mouse_last);
mouse.scale=0.1
/*console.log(cat.width);
console.log(mouse.width);*/


}

function draw() {

    background(background_Img);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width/2-mouse.width/2)){
        cat.x=300
        mouse.changeAnimation("mouse_last",mouse_last);
        cat.changeAnimation("cat_lastImg",cat_lastImg);

    }




    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.x=cat.x-10;
    cat.changeAnimation("cat_running",cat_running);
    mouse.changeAnimation("mouse_teasing",mouse_teasing);
}

}
