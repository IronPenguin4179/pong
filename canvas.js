console.log("JS is working.");

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
// c.fillStyle = 'rgba(255, 0, 0, 1)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 1)';
// c.fillRect(500, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 255, 1)';
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

// // Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "green";
// c.stroke();

// //Random Circle locations
// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
// }

function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = x;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        };
        
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        };

        this.x += this.dx;
        this.y += this.dy;

        circle.draw();
    }
}

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 4;
var dy = (Math.random() - 0.5) * 4;
var radius = 30;

var circle = new Circle(x, y, radius, dx, dy);
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    circle.update();
}

animate();