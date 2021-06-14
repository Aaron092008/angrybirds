class Bird

{
    constructor(x,y,w,h){
        var boxF={
            restitution:0.8
          }
         this.bird = Bodies.rectangle(x,y,w,h,boxF)
         World.add(myworld,this.bird)
         this.w=w
         this.h=h
         this.img4=loadImage("bird.png")
      }
      display(){
          
          
          push ()
          translate (this.bird.position.x,this.bird.position.y)
          rotate (this.bird.angle)
        imageMode(CENTER)
        image (this.img4,0,0,this.w,this.h)
        pop ()
      }
}