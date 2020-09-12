var ball;
var position,database

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballpos = database.ref('ball/position');
    ballpos.on("value",readpos)
}

function draw(){
    background("white");
    if(position !== undefined){
        if(keyDown(LEFT_ARROW)){
            writepos(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writepos(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writepos(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writepos(0,+1);
        }
        
        drawSprites();
    }
    
   
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readpos(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writepos(x,y){
    database.ref('ball/position').set({
        x:position.x+x,
        y:position.y+y
    })
}
