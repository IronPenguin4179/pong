
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 480;
paddle1Y=paddle2Y=40;
paddleW=10;
paddleH=100;
ballX=ballY=50;
velX=velY=4
ballSize=6;
score1=score2=0;
ais=2;

function Rect(x, y, w, h) {
    c.fillStyle = 'white';
    c.fillRect(x, y, w, h);
}
function Player() {
    this.paddle = new Rect(canvas.width*0, paddle1Y, paddleW, paddleH);
}
function Computer() {
    this.paddle = new Rect(canvas.width-paddleW, paddle2Y, paddleW, paddleH);
}
window.onload = function() {
    setInterval(update,1000/30);
    canvas.addEventListener('mousemove',function(e){
          paddle1Y=e.clientY-paddleH/2;
    })
}
function reset() {
    ballX=canvas.width/2;
    ballY=canvas.height/2;
    velX=-velX;
    velY=3;
}
function update() {
    ballX+=velX;
    ballY+=velY;
    if(ballY<0 && velY<0) {
        velY = -velY;
    }
    if(ballY>canvas.height && velY>0){
        velY = -velY;
    }
    if(ballX<0) {
        if(ballY>paddle1Y && ballY<paddle1Y+paddleH) {
            velX=-velX;
            dy=ballY-(paddle1Y+paddleH/2);
            velY=dy*0.3;
        } else {
            score2++;
            reset();
        }
    }
    if(ballX>canvas.width) {
        if(ballY>paddle2Y && ballY<paddle2Y+paddleH) {
            velX=-velX;
            dy=ballY-(paddle2Y+paddleH/2);
            velY=dy*0.3;
        } else {
            score1++;
            reset();
        }
    }
  
    if (paddle2Y+paddleH/2<ballY) {
        paddle2Y+=ais;
    } else {
        paddle2Y-=ais;
    }
  
    c.clearRect(0,0,canvas.width,canvas.height)
    c.fillText(score1,100,100);
    c.fillText(score2,canvas.width-100,100);
    var player = new Player();
    var computer = new Computer();
    var ball = new Rect(ballX-ballSize/2,ballY-ballSize/2, ballSize, ballSize);
}