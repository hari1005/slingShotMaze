
class Halt{
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:100
        }
    this.string=Constraint.create(option)
    World.add(world,this.string)
    this.bodyA=bodyA
    this.bodyB=bodyB
    
}

attach(body){
this.bodyA=body
}
fly(brody){
    this.bodyA=brody
}
display(){
    this.bodyA.pos=this.bodyA.position
    this.bodyB.pos=this.bodyB.position
    stroke("red")
    strokeWeight(4)
    line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x+30,this.bodyB.position.y+40)

}
}