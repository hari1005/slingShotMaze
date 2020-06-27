class Blocky{
    constructor(x,y,w,h){
        var options={
            'restitution':0.6,
            'friction':1.0,
            'density':0.9
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        fill("black")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }
}