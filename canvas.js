var canvas = document.querySelector('canvas');
 
canvas.width = 300;
canvas.height = 450;
canvas.border = 10;


var c = canvas.getContext('2d');

c.beginPath();
c.moveTo(50, 150);
c.lineTo(200, 150);
c.lineTo(200, 240);
c.lineTo(50, 240);
c.lineTo(50, 150);
c.stroke();

c.beginPath();
c.moveTo(200, 175);
c.lineTo(200, 215);
c.lineTo(220, 215);
c.lineTo(220, 175);
c.lineTo(200, 175);
c.stroke();




c.beginPath();
c.fillRect(55, 155, 40, 80);
c.stroke();

var x = 55;
var dx = 1;
function animate() {
    requestAnimationFrame(animate);
    

    c.beginPath();
    c.fillRect(x, 155, 40, 80)
    c.stroke();

    if (x > 155) {
    c.font="30px Roboto";
    c.fillStyle = "green";
    c.textAlign = "center";
    c.fillText("Phone is charged", canvas.width/2, 320);

        end();
    }
    x += dx;

   


}
animate();





