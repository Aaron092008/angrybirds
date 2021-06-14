const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var myengine,myworld,ground
var box1,box2,box3,box4,box5
var pig1,pig2
var bo
var stick1,stick2,stick3,stick4
var groundimg
var uselessstick
var connect
var platform
function preload(){
  groundimg=loadImage("bg.png")


}

function setup() {
  createCanvas(1200,400);
  myengine = Engine.create();
  myworld=myengine.world;
 ground = new Ground(600,390,1200,10)
 box1 = new Box(900,350,50,50)
 box2 = new Box(700,350,50,50)
 pig1 = new Piggy(800,350,50,50)
 box3 = new Box(900,250,50,50)
 box4 = new Box(700,250,50,50)
 box5 = new Box(800,180,50,50)
 pig2 = new Piggy(800,250,50,50)
 bo = new Bird(210,50,50,50)
 stick1 = new Stick(800,300,15,290,PI/2)
 stick2 = new Stick(800,200,15,290,PI/2)
 stick3 = new Stick(750,180,15,100,PI/4)
 stick4 = new Stick(850,180,15,100,PI/-4)
 uselessstick = new Stick(50,180,10,100,PI/2)
 platform = new Ground(70,320,500,300)
 connect = new Connection(bo.bird,{
   x:210,y:50
 })
}
function mouseDragged(){
Matter.Body.setPosition(bo.bird,{
x:mouseX,
y:mouseY

})
var arr = [20,21,10,30]
console.log(arr[1])
arr.push(1)
arr.pop()
}
function mouseReleased(){
connect.breakConnection()

}

function draw() {
if (groundimg){
  background(groundimg);
}

    
  Engine.update(myengine)
 ground.display()
 box1.display()
 box2.display()
 pig1.display()
 box3.display()
 box4.display()
 pig2.display() 
 bo.display()
 stick1.display()
 stick2.display()
 stick3.display()
 stick4.display()
 box5.display()
 platform.display()
 connect.display()
}
async function decideBackground(){
var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var data = await response.json()
var time = data.datetime
console.log(time)
var hour = time.slice(11,13)
console.log(hour)
if (hour >=6&&hour<=12){
  groundimg=loadImage("bg.png")

}
else 
{groundimg=loadImage("NIGHT IMAGE.jpg")
}
}