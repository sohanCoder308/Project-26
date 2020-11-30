class Rope {
    constructor (bobbody,roofbody,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bobbody,
            bodyB : roofbody,
            pointB : {x:this.offsetX , y:this.offsetY}
            
            
        }
        
        this.body = Constraint.create(options);
        World.add(world,this.body); 
    }
    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        //strokeWeight(4);
        //push();
        strokeWeight(5);
        //fill(164, 126, 199);
        //stroke(164, 126, 199);
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        //pop();

    }
}