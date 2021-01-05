class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            restitution:0.3,
            friction:0.5,
            density:1.0
        }
        this.bodies=Bodies.circle(x,y,r/2,options);
        World.add(world,this.bodies);
        this.r=r;
        this.image=loadImage("sprites/paper.png");
    }
    display()
    {
        push();
        translate(this.bodies.position.x,this.bodies.position.y);
        strokeWeight(3);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop();
    }

    

}