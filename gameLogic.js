var count = 0;
var x = 300;
var y = 350;
var t = Date.now()
var speed = 25;



window.onload = function(){

    var canvas = document.getElementById("canvas");
    
    var context = canvas.getContext("2d");

    
    function drawCircle()
    {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        if(y <= 350) {
            speed += 50 * timePassed;
            y += speed*timePassed;
        }
        if(y > 350) {
            count = 0
        }
    
       
    context.clearRect(0,0,600,400);
    context.beginPath();
    context.arc(x,y,50,0,2*Math.PI);
    context.fillStyle = "red";
    context.fill();
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("Count: " + count, 20, 30);
    window.requestAnimationFrame(drawCircle);
    }

    function hit()
    {
     y -= 25;
     speed = 25
    count += 1;
    console.log(count);
    drawCircle();
    }

    
    
    document.onkeydown = hit ;
    document.ontouchstart = hit ;
    drawCircle();
}


   
