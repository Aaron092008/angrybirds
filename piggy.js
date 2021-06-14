class Piggy

{
    constructor(x,y,w,h){
      this.a = 255
        var boxF={
            restitution:0.8
          }
         this.piggy = Bodies.rectangle(x,y,w,h,boxF)
         World.add(myworld,this.piggy)
         this.w=w
         this.h=h
         this.img2=loadImage("enemy.png")
      }
      display(){
        //console.log(this.piggy.speed)
      if (this.piggy.speed<4){
        push ()
        translate (this.piggy.position.x,this.piggy.position.y)
        rotate (this.piggy.angle)
      imageMode(CENTER)
      image (this.img2,0,0,this.w,this.h)
      pop ()
      
     
      }
      else {
        World.remove(myworld,this.piggy)
        push ()
        tint(255,this.a)
        image (this.img2,this.piggy.position.x,this.piggy.position.y,this.w,this.h)
        this.a=this.a-5
        pop ()
      }
         
      }
}