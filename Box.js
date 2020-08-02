class Box extends Baseclass{
   
    constructor(x,y){
      super(x,y,50,50);
     
    }
  
  
display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill(255,229,30);
  rect(pos.x, pos.y, this.width, this.height);

  if(this.body.speed < 3){
    super.display();
   }

   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
    
     pop();
   }
  

 
    
  }

}

