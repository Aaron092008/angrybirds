class Box

{
    constructor(x,y,w,h){
        var boxF={
            restitution:0.8
          }
         this.box = Bodies.rectangle(x,y,w,h,boxF)
         World.add(myworld,this.box)
         this.w=w
         this.h=h
         this.img=loadImage("wood1.png")
      }
    
      display(){
          push ()
          translate (this.box.position.x,this.box.position.y)
          rotate (this.box.angle)
        imageMode(CENTER)
        image (this.img,0,0,this.w,this.h)
        pop ()
      }
}