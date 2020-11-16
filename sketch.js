var world,engine,box1,ground1

function setup()
{
  createCanvas(600,600)
  engine=Matter.Engine.create()
  world=engine.world;
 
  box1=new Box(0,0,40,40)
  ground1=new Ground(200,30,200,10)

}
function draw()
{
  Matter.Engine.update(engine)
  Matter.Body.setStatic(ground1.body,true)
  
  
  
  background(0)
  box1.display()
  ground1.display()
   

}
function mousePressed()
{
  boxes.push(new Box(mouseX,mouseY,20,20))
}