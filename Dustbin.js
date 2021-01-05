class Dustbin
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic:true
        }
        this.bodies=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.bodies);
        this.w=w;
        this.h=h;
        this.image=loadImage("sprites/dustbin.png")
    }
    display()
    {
        var pos=this.bodies.position;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
        pop();
    }

}