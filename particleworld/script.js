function idgen(length){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    
    for(i=0;i<length;i++){
        result+=characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
function drawCircle(ctx, color, x, y, radius) {
    var canvas = document.getElementById(ctx);
     var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

var squares = [];
var worldspeed = 3;
var zoom = 2;
var squareamt = 5;
var visible = ["red","green","yellow","blue","purple"];

var end = false;
var ruleset = [
    {color: "red", rate: 10 * worldspeed, size: 100 *zoom, attract: ["yellow","green","red","blue","purple"], repel: ["blue","purple","yellow","red"]},
    {color: "blue", rate: 17 * worldspeed, size: 80*zoom, attract: ["green","blue","yellow","red","purple"], repel: ["red","purple","green","blue"]},
    {color: "green", rate: 7 * worldspeed, size: 130*zoom, attract: ["blue","purple","yellow","green","purple"], repel: ["green","red","yellow","blue","green"]},
    {color: "yellow", rate: 20 * worldspeed, size: 50*zoom, attract: ["red","yellow","purple"], repel: ["blue","yellow","red","purple","green","yellow"]},
    {color: "purple", rate: 4 * worldspeed, size: 190*zoom, attract: ["red","blue","green","yellow"], repel: ["purple"]},
 ];



function collision(a, b) {
  if(document.getElementById(a) && document.getElementById(b)){
  const rect1 = document.getElementById(a).getBoundingClientRect();
  const rect2 = document.getElementById(b).getBoundingClientRect();
  const isInHoriztonalBounds =
    rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x;
  const isInVerticalBounds =
    rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
  const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
  return isOverlapping;
  } else {return false;}
}

function update(squared){
    end = true;
    squares.some(i=> {
        document.getElementById(i.id).remove();
        squares = [];
    });
    end=false;
    for(let i=0; i<squared; i++){
        particle("red");
        particle("blue");
        particle("green");
        particle("yellow");
        particle("purple");
    }
}

function particle(color,x,y){
    var localId = idgen(10);
   squares = [...squares, {color: color, id: localId}];
   var repelList = [];
   var attractList = [];
   var size;
   if(x !== undefined && y !== undefined){
       x = x; y = y;
   } else {
       x = Math.floor(Math.random() * window.innerWidth);
       y = Math.floor(Math.random() * window.innerHeight);
   }
   var direction = {
       left: false,
       right: false,
       up: false,
       down: false,
   }
   var rate = 5;
   var directionlist = ["left","right","up","down"];
   var choic = directionlist[Math.floor(Math.random() * directionlist.length)];
   direction[choic] = true;
   
   ruleset.some(i => {
       if(i.color == color){
           attractList = i.attract;
           repelList = i.repel;
           size = i.size;
           rate = i.rate;
       }
   });
   
   if(!visible.includes(color))color = "rgba(0,0,0,0.1)";
   
  /* var newparticle = document.createElement("div");
   newparticle.style.backgroundColor = color;
   newparticle.style.borderRadius = size + "px";
   newparticle.style.width = size + "px";
   newparticle.style.height = size + "px";
   newparticle.style.position = "absolute";
   newparticle.id = localId;
   document.body.appendChild(newparticle);*/
   
   var loop = setInterval(() => {
       if(end == true){clearInterval(loop); squares = squares.splice(squares.indexOf)}
       squares.some(i => {
           if(i.id == localId){return;}
           
           if(attractList.includes(i.color) && collision(localId,i.id)){
               var thesquare = document.getElementById(i.id);
               
               if(thesquare.getBoundingClientRect().x < x){
                   direction.left = true;
                   direction.right = false;
               } else {
                   direction.right = true;
                   direction.left = false;
               }
               if(thesquare.getBoundingClientRect().y < y){
                   direction.up = true;
                   direction.down = false;
               } else {
                   direction.up= true;
                   direction.down = false;
               }
           }
           if(repelList.includes(i.color) && collision(localId,i.id)){
               var thesquare = document.getElementById(i.id);
               
               if(thesquare.getBoundingClientRect().x < x){
                   direction.right = true;
                   direction.left = false;
               } else {
                   direction.left = true;
                   direction.right = false;
               }
               if(thesquare.getBoundingClientRect().y < y){
                   direction.up = false;
                   direction.down = true;
               } else {
                   direction.up= false;
                   direction.down = true;
               }
           }
       });
       if(direction.left == true){
           x-=rate;
       }
       if(direction.right == true){
           x+=rate;
       }
       if(direction.up == true){
           y-=rate;
       }
       if(direction.down == true){
           y+=rate;
       }
       if(x > window.innerWidth + size){
           x = 0;
       }
       if(y > window.innerHeight + size){
           y = 0;
       }
       if(x < 0 - size){
           x = window.innerWidth;
       }
       if(y < 0 - size){
           y = window.innerHeight;
       }
       newparticle.style.left = x + "px";
       newparticle.style.top = y + "px";
   },20)
}

for(let i=0; i<squareamt; i++){
    particle("red");
    particle("blue");
    particle("green");
    particle("yellow");
    particle("purple");
}