class paper{
    constructor(x,y,r)
    {
        var options= {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,

        }
        this.body.x=x;
        this.body.y=y;
        this.body.r=r; 
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        world .add(world,this.body)
}
}
display()
{
    var paperpos= this.body.position;
     Push()
     translate(paperpos.x,paperpos.y)
     rectMode(CENTER)
     strokeWeight(3)
     Fill(255,0,255)
     ellipse(0,0,this.r,this.r)
     Pop()
}


