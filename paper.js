
class paper {
    constructor(x, y,radius) {
       var options = {
        'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      
    
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius;
      this.height = height;
      this.paper = loadImage('download.jpg');
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      image(this.paper,20,20);
     
    }
  };
  