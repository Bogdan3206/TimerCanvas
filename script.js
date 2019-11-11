
var Start = 0;
var pTime = 0;
var Seconds = 0;
var Minutes = 0;
var Hours = 0;



function StopWatch() {
  var canvas = document.getElementById("stopWatchCanvas");
  var ctx = canvas.getContext("2d");
  var centerX = canvas.width / 2, 
    centerY = canvas.width / 2, 
    radius = canvas.width / 2 * 0.8;

  var timer;
  var timer2;
  var stopWatchTime;
  
  function drawLine(endX, endY, width) {
    width = width || 4;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.stroke();
  }
  
  function drawStopWatch(time) {
    
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 8;
    ctx.stroke();
    
    drawLine(canvas.width/2,canvas.height/2, 14);
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY-radius);
    ctx.lineTo(centerX, centerY-radius+15);
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.moveTo(centerX, centerY+radius);
    ctx.lineTo(centerX, centerY+radius-15);
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.moveTo(centerX+radius, centerY);
    ctx.lineTo(centerX+radius-15, centerY);
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.moveTo(centerX-radius, centerY);
    ctx.lineTo(centerX-radius+15, centerY);
    ctx.lineWidth = 8;
    ctx.stroke();
    
    ctx.moveTo(centerX-radius/2, centerY-radius+26);
    ctx.lineTo(centerX-radius/2+5, centerY-radius+26+10);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX+radius/2, centerY+radius-26);
    ctx.lineTo(centerX+radius/2-5, centerY+radius-26-10);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX+radius/2, centerY-radius+26);
    ctx.lineTo(centerX+radius/2-5, centerY-radius+26+10);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX-radius/2, centerY+radius-26);
    ctx.lineTo(centerX-radius/2+5, centerY+radius-26-10);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX+radius-26, centerY-radius/2);
    ctx.lineTo(centerX+radius-26-10, centerY-radius/2+5);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX-radius+26, centerY+radius/2);
    ctx.lineTo(centerX-radius+26+10, centerY+radius/2-5);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX+radius-26, centerY+radius/2);
    ctx.lineTo(centerX+radius-26-10, centerY+radius/2-5);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.moveTo(centerX-radius+26, centerY-radius/2);
    ctx.lineTo(centerX-radius+26+10, centerY-radius/2+5);
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.fillStyle = "red";
    ctx.font = "bold 24pt Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "center";
    ctx.fillText("12", centerX, centerY-radius+40);
    ctx.fillText("6", centerX, centerY+radius-20);
    ctx.fillText("3", centerX+radius-28, centerY+10);
    ctx.fillText("9", centerX-radius+28, centerY+10);

    ctx.fillText("11", centerX-radius/2+10, centerY-radius+26+38);
    ctx.fillText("5", centerX+radius/2-10, centerY+radius-26-16);
    ctx.fillText("7", centerX-radius/2+14, centerY+radius-26-15);
    ctx.fillText("1", centerX+radius/2-14, centerY-radius+26+34);
    ctx.fillText("2", centerX+radius-26-24, centerY-radius/2+14);
    ctx.fillText("8", centerX-radius+26+24, centerY+radius/2);
    ctx.fillText("4", centerX+radius-26-24, centerY+radius/2+4);
    ctx.fillText("10", centerX-radius+26+30, centerY-radius/2+16);

    var secondHandDegree = time / 1000 * 6;
    var minuteHandDegree = time / 1000 / 60 * 6;
    var hoursHandDegree = time / 1000 / 60 / 12 * 6;

    var secondHandRadian = secondHandDegree * (Math.PI / 180) - Math.PI / 2;
    var minuteHandRadian = minuteHandDegree * (Math.PI / 180) - Math.PI / 2;
    var hoursHandRadian = hoursHandDegree * (Math.PI / 180) - Math.PI / 2;

    var secondX = centerX + (Math.cos(secondHandRadian) * radius * 0.86);
    var secondY = centerY + (Math.sin(secondHandRadian) * radius * 0.86);
    drawLine(secondX, secondY);

    var minuteX = centerX + (Math.cos(minuteHandRadian) * radius * 0.76);
    var minuteY = centerY + (Math.sin(minuteHandRadian) * radius * 0.76);
    drawLine(minuteX, minuteY, 6);
    

    var hoursX = centerX + (Math.cos(hoursHandRadian) * radius * 0.66);
    var hoursY = centerY + (Math.sin(hoursHandRadian) * radius * 0.66);
    drawLine(hoursX, hoursY, 10);
  }
  
  this.startStopWatch = function() {
    Minutes=0;
    Hours=0;
    Start++;
    if (Start==1)
    {
    pTime = new Date();
    
    var startTime = new Date();
    
    (function animateStopWatch() {
        
      var currentTime = new Date();
      
      stopWatchTime = currentTime - startTime;

      drawStopWatch(stopWatchTime);
      timer = setTimeout(animateStopWatch, 1);
    })();
    (function animateStopWatch2() {
      ChangeP();
      var currentTime = new Date();
            stopWatchTime = currentTime - startTime;
            timer2 = setTimeout(animateStopWatch2, 1);
    })();
    } else {
       alert("Ошибка! Секундомер уже запущен!");
    }
  }
  
  this.pauseStopWatch = function() {
    Start=0;
    
    clearTimeout(timer);
    clearTimeout(timer2);
    
    alert("Время (часов : минут : секунд : милисекунд):\n" + Hours + " : " + Minutes + " :" + Seconds);

  }
  drawStopWatch(0);
}

var stopwatch = new StopWatch();
var startBtn = document.getElementById("startStopWatch");
startBtn.addEventListener("click", stopwatch.startStopWatch);

var pauseBtn = document.getElementById("pauseStopWatch");
pauseBtn.addEventListener("click", stopwatch.pauseStopWatch);

function ChangeP(){
if (pTime==0) return;
  if (Math.round((new Date().getTime()-pTime)/1000*10)/10 > 60)
  {
    Minutes++;
    pTime = (pTime/1000+60)*1000;
  }
    if (Minutes == 60)
  {
    Hours++;
    Minutes = 0;
  }
  Seconds = Math.round((new Date().getTime()-pTime)/100)/10;
    if (Math.round((new Date().getTime()-pTime)/1000) == Math.round((new Date().getTime()-pTime)/1000*10)/10){
    document.getElementById('timer').innerHTML = Hours + ":" + Minutes + ":" + Math.round((new Date().getTime()-pTime)/1000*10)/10 + ".0";
  } else {
    document.getElementById('timer').innerHTML = Hours + ":" + Minutes + ":" + Math.round((new Date().getTime()-pTime)/1000*10)/10;
  }
}