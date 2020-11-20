class Paper{
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        image(this.image, pos.x, pos.y, 50,50);
        if(pos.x<650){
          Body.applyForce(this.body,{x: pos.x, y: pos.y},{x: 2.8, y: -20});
        };
      }
}