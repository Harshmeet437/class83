var mouseE = "empty";
var Lx
var Ly

canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 5;

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992) {

    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;

    document.body.style.overflow = "hiden";

}

canvas.addEventListener("touchstart", start);

function start() {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) 
{

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + Lx + "y = " + Ly);
    ctx.moveTo(Lx, Ly);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    Lx = current_position_of_touch_x; 
    Ly = current_position_of_touch_y;
    
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}