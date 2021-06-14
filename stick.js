class Stick

{
    constructor(x,y,w,h,a){
        var boxF={
            restitution:0.8
          }
         this.stick = Bodies.rectangle(x,y,w,h,boxF)
         Matter .Body.setAngle(this.stick,a)
         World.add(myworld,this.stick)
         this.w=w
         this.h=h
         this.img3=loadImage("wood2.png")
      }
      display(){
          push ()
          translate (this.stick.position.x,this.stick.position.y)
          rotate (this.stick.angle)
        imageMode(CENTER)
        image(this.img3,0,0,this.w,this.h)
        pop ()
      }
}