class Slingshot{
constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stickness:0.04,
        legnth:10,
    } 
    this.pointB=pointB
     this.slingshot= constraint.create(options)
World.add(world,this.slingshot)

}
fly(){
    this.slingshot.bodyA=null
    
    
    }
display(){
    if(this.slingshot.bodyA){
        var pointA=this.slingshot.bodyA.position
        var pointB=this.pointB
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        }

    }


}