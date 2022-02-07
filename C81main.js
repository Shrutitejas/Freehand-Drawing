canvas=document.getElementById("myCanvas");
canvas.getContext("2d");
ctx=canvas.getContext("2d");
mouseEvent="empty";
var lastpositionofx,lastpositionofy;
color="black";
width_of_line=3;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("widthofline").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX- canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY- canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(lastpositionofx,lastpositionofy);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    lastpositionofx=current_position_of_mouse_x;
    lastpositionofy=current_position_of_mouse_y;
}




function erasecanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}