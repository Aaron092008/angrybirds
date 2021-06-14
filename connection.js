class Connection{

constructor(a, b){
var options={
bodyA:a,
pointB:b,
length:10,
stiffness:0.04

}
this.connection=Constraint.create(options)
World.add(myworld,this.connection)
this.sling1=loadImage("sling1.png")
this.sling2=loadImage("sling2.png")
this.sling3=loadImage("sling3.png")

}
display(){
    image (this.sling1,200,50,50,120)
    image (this.sling2,170,40,40,80)
    
    if (this.connection.bodyA!=null){


    
var a = this.connection.bodyA.position
var b = this.connection.pointB
line (a.x-15,a.y+10,b.x-15,b.y+10)
line (a.x+15,a.y+10,b.x+15,b.y+10)
image (this.sling3,a.x-15,a.y,10,20)

    }
}
 breakConnection(){
this.connection.bodyA=null

}



}