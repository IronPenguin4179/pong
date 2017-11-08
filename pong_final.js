const canvas = document.querySelector('canvas');
const context = canvas.getContext("2d");
paddle1Y = paddle2Y = 40;
score1 = score2 = 0;
player1Score = player2Score = 0;
ballX=canvas.width/2;
ballY=canvas.height/2;
paddleWidth = 10;
paddleHeight = 100;
ais = 3;
xv = -5*Math.random();
yv = Math.random()*3-6;
function reset() {
  ballX=canvas.width/2;
  ballY=canvas.height/2;
  xv*=-1;
  yv=3;
}
function Rect(x,y,w,h) {
  context.fillStyle = "white";
  context.fillRect(x,y,w,h);
  this.top = y;
  this.bottom = y+h;
  this.left = x;
  this.right = x+w;
  this.y = y;
  this.x = x;
}
function Paddle(x,y) {
  this.width = paddleWidth;
  this.height = paddleHeight;
  this.rect = new Rect(x,y,this.width,this.height)
  if (y+this.height/2<0) {
    y = 0-this.height/2;
  } else if (y+this.height/2>canvas.height) {
    y = canvas.height-this.height/2;
  }
}
function Ball() {
  ballSize = 6;
  this.ballRScore = this.ballLScore = false;
  this.rect = new Rect(ballX,ballY,ballSize,ballSize);
  ballX += xv;
  ballY += yv;
  if (ballY <= 0 || ballY >= canvas.height) {
    yv *= -1;
  }
  if (ballX+ballSize < 0) {
    this.ballLScore = true;
    reset();
  }
  if (ballX>canvas.width) {
    this.ballRScore = true;
    reset();
  }
  
}
function Player(ball) {
  this.paddle = new Paddle(canvas.width*0.1,paddle1Y);
  this.score = player1Score;
  if (ball.rect.x <= this.paddle.rect.right && ball.rect.x>=this.paddle.rect.left && ball.rect.top<=this.paddle.rect.bottom && ball.rect.bottom>=this.paddle.rect.top) {
    xv*=-1;
    ballX+=2*xv;
  }
  if (ball.ballRScore == true) {
    player1Score += 1;
  }
}
function Computer(ball) {
  this.paddle = new Paddle(canvas.width*0.9,paddle2Y);
  this.score = player2Score;
  if (this.paddle.rect.y+this.paddle.height/2<ball.rect.y) {
      paddle2Y+=ais;
  } else {
      paddle2Y-=ais;
  }
  if (ball.rect.right >= this.paddle.rect.left && ball.rect.x<=this.paddle.rect.right && ball.rect.top<=this.paddle.rect.bottom && ball.rect.bottom>=this.paddle.rect.top) {
    xv*=-1;
    ballX+=2*xv;
  }
  if (ball.ballLScore == true) {
    player2Score += 1;
  }
}
function update() {
  context.clearRect(0,0,canvas.width,canvas.height)
  var ball = new Ball();
  var player = new Player(ball);
  var computer = new Computer(ball);
  context.fillText(player.score,100,100);
  context.fillText(computer.score,canvas.width-100,100);
}
window.onload = function(){
  setInterval(update,1000/30);
  canvas.addEventListener('mousemove',function(e){
    paddle1Y=e.clientY-paddleHeight/2;
  })
}
