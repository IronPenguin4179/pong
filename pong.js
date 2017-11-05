var canvas = document.querySelector("canvas");

canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext("2d");
function Paddle(x, y) {
    c.fillStyle = 'black';
    c.fillRect(x, y, 20, 80);
}
function Ball(x, y) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2, false);
    c.stroke();
    c.fill();
}

function Player() {
    this.paddle = new Paddle(canvas.width*0.1, canvas.height*0.1);
}
function Computer() {
    this.paddle = new Paddle(canvas.width*0.86, canvas.height*0.2,);
}

function render() {
    var player = new Player();
    var computer = new Computer();
    var ball = new Ball(250,250);
}
window.onload = render();