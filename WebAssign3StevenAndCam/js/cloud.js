var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// the veritcal placement of the house
var movDown = 147;
// draws hill
function hill() {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(250, 825, 500, 0, 2 * Math.PI);
    ctx.stroke();
    var grd = ctx.createRadialGradient(250, 850, 500, 90, 60, 100);
    grd.addColorStop(0.6, "green");
    grd.addColorStop(1, "black");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
}
// draws right roof
function roofR() {
    ctx.beginPath();
    ctx.moveTo(170, 20 + movDown);
    ctx.lineTo(363, 87 + movDown);
    ctx.lineTo(410, 137 + movDown);
    ctx.lineTo(260, 110 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#C81E1E";
    ctx.fill();
    ctx.stroke();
}
// draws left roof
function roofL() {
    ctx.beginPath();
    ctx.moveTo(168, 19 + movDown);
    ctx.lineTo(100, 120 + movDown);
    ctx.lineTo(117, 120 + movDown);
    ctx.lineTo(117, 109 + movDown);
    ctx.lineTo(176, 27 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#5e2020";
    ctx.fill();
    ctx.stroke();
}
// draws chimney left
function chimneyL() {
    ctx.beginPath();
    ctx.moveTo(328, 37 + movDown);
    ctx.lineTo(328, 86 + movDown);
    ctx.lineTo(347, 102 + movDown);
    ctx.lineTo(347, 39 + movDown);
    ctx.lineTo(328, 37 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#5e2020";
    ctx.fill();
    ctx.stroke();
}
// draws chimney right
function chimneyR() {
    //draws chimney right
    ctx.beginPath();
    ctx.moveTo(347, 39 + movDown);
    ctx.lineTo(368, 37 + movDown);
    ctx.lineTo(368, 105 + movDown);
    ctx.lineTo(347, 102 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#C81E1E";
    ctx.fill();
    ctx.stroke();
}
// draws chimney Top
function chimneyT() {
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(347, 30 + movDown);
    ctx.lineTo(347, 33 + movDown);
    ctx.lineTo(370, 32 + movDown);
    ctx.closePath();
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(347, 30 + movDown);
    ctx.lineTo(347, 33 + movDown);
    ctx.lineTo(329, 32 + movDown);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(345, 40 + movDown);
    ctx.lineTo(345, 33 + movDown);
    ctx.lineTo(322, 30 + movDown);
    ctx.lineTo(322, 37 + movDown);
    ctx.lineTo(345, 40 + movDown);
    ctx.lineTo(373, 38 + movDown);
    ctx.lineTo(373, 31 + movDown);
    ctx.lineTo(345, 33 + movDown);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
    
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(322, 30 + movDown);
    ctx.lineTo(346, 29 + movDown);
    ctx.lineTo(373, 31 + movDown);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.stroke();
}
// draws front wall
function wallF() {
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(176, 27 + movDown);
    ctx.lineTo(117, 109 + movDown);
    ctx.lineTo(117, 229 + movDown);
    ctx.lineTo(231, 258 + movDown);
    ctx.lineTo(233, 83 + movDown);
    var grd2 = ctx.createLinearGradient(117, 0, 380, 0);
    grd2.addColorStop(0, "#694554");
    grd2.addColorStop(0.4, "pink");
    ctx.fillStyle = grd2;
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}
// draws side wall
function wallS() {
    ctx.beginPath();
    ctx.moveTo(233, 83 + movDown);
    ctx.lineTo(231, 258 + movDown);
    ctx.lineTo(388, 220 + movDown);
    ctx.lineTo(391, 134 + movDown);
    ctx.lineTo(260, 110 + movDown);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}
// draws door
function door() {
    ctx.beginPath();
    ctx.moveTo(180, 245 + movDown);
    ctx.lineTo(180, 120 + movDown);
    ctx.lineTo(220, 115 + movDown);
    ctx.lineTo(220, 255 + movDown);
    ctx.fillStyle = "#CD853F";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
}
// draws door knob
function doorK() {
    ctx.beginPath();
    ctx.arc(186, 171 + movDown, 3, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}
// draws front window
function windowF() {
    ctx.beginPath();
    ctx.moveTo(133, 118 + movDown);
    ctx.lineTo(163, 113 + movDown);
    ctx.lineTo(163, 181 + movDown);
    ctx.lineTo(133, 180 + movDown);
    ctx.lineTo(133, 118 + movDown);
    ctx.moveTo(147, 116 + movDown);
    ctx.lineTo(147, 180 + movDown);
    ctx.moveTo(163, 149 + movDown);
    ctx.lineTo(133, 150 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#5dd1d3";
    ctx.fill();
    ctx.stroke();
}
// draws side window
function windowS() {
    ctx.beginPath();
    ctx.moveTo(272, 118 + movDown);
    ctx.lineTo(359, 133 + movDown);
    ctx.lineTo(359, 178 + movDown);
    ctx.lineTo(271, 183 + movDown);
    ctx.lineTo(272, 118 + movDown);
    ctx.moveTo(316, 126 + movDown);
    ctx.lineTo(316, 180 + movDown);
    ctx.moveTo(359, 155 + movDown);
    ctx.lineTo(272, 151 + movDown);
    ctx.closePath();
    ctx.fillStyle = "#87fdff";
    ctx.fill();
    ctx.stroke();
}
// draws all house content
hill();
roofR();
roofL();
chimneyL();
chimneyR();
chimneyT();
wallF();
wallS();
door();
doorK();
windowF();
windowS();
// range slider values
var speed = document.getElementById("speed");
var i = speed.value;
speed.addEventListener("change", function() {i = speed.value});
/*
* Four functions that draw and animate the smoke
*/
// draws and animates the first puff
function smoke() {
    var x1 = 330;
    var y1 = 110;
    var trans1 = 0.9;
    // draws the firsts smoke puff
    function drawSmoke1(x1, y1) {
        var x = x1;
        var y = y1;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - 20, x + 40, y - 20, x + 40, y + 5);
        ctx.bezierCurveTo(x + 65, y, x + 70, y + 40, x + 50, y + 40);
        ctx.bezierCurveTo(x + 53, y + 60, x + 23, y + 65, x + 20, y + 55);
        ctx.bezierCurveTo(x + 10, y + 65, x - 25, y + 55, x - 15, y + 35);
        ctx.bezierCurveTo(x - 35, y + 15, x - 10, y - 10, x, y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(120, 120, 120, ' + trans1 + ')';
        ctx.fill();
    }
    // redraws the c object every frame (FPS)
    function redraw() { 
        ctx.clearRect(200, 0, 300, 175);
        if (y1 > -200) {
            y1 = y1 - i;
            if (trans1 > 0 && trans1 < 1) {
                trans1 -= 0.004;
            }
        } else {
            y1 = 100;
            // resets opacity
            trans1 = 0.9;
        }
        //draw the smoke
        drawSmoke1(x1, y1);
        //schedules the function to be run on the next frame
        requestAnimationFrame(redraw); 
    }
    redraw();
    // run the move function every second (10- milliseconds)
    setInterval(redraw(), 10); 
}
// draws and animates the second smoke puff
function smoke2() {
    var x2 = 330;
    var y2 = 110;
    var trans2 = 0.9;
    // draws the second smoke puff
    function drawSmoke2(x2, y2) {
        var x = x2;
        var y = y2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - 20, x + 40, y - 20, x + 40, y + 5);
        ctx.bezierCurveTo(x + 65, y, x + 70, y + 40, x + 50, y + 40);
        ctx.bezierCurveTo(x + 53, y + 60, x + 23, y + 65, x + 20, y + 55);
        ctx.bezierCurveTo(x + 10, y + 65, x - 25, y + 55, x - 15, y + 35);
        ctx.bezierCurveTo(x - 35, y + 15, x - 10, y - 10, x, y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(130, 130, 130, ' + trans2 + ')';
        ctx.fill();
    }
    // redraws the c object every frame (FPS)
    function redraw2() { 
        if (y2 > -200) {
            y2 = y2 - i - 0.1;
            if (trans2 > 0 && trans2 < 1) {
                trans2 -= 0.005;
            }
        } else {
            y2 = 100;
            x2 = 330;
            trans2 = 0.9;
        }
        if (x2 < 355 && x2 > 280) {
            x2 -= 0.2;
        }
        drawSmoke2(x2, y2);
        //schedules the function to be run on the next frame
        requestAnimationFrame(redraw2); 
    }
    redraw2();
    // runs the move function every second (10- milliseconds)
    setInterval(redraw2(), 10); 
}
// draws and animates the third smoke puff
function smoke3() {
    var x3 = 330;
    var y3 = 110;
    var trans3 = 0.9;
    // draws the third smoke puff
    function drawSmoke3(x3, y3) {
        var x = x3;
        var y = y3;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - 20, x + 40, y - 20, x + 40, y + 5);
        ctx.bezierCurveTo(x + 65, y, x + 70, y + 40, x + 50, y + 40);
        ctx.bezierCurveTo(x + 53, y + 60, x + 23, y + 65, x + 20, y + 55);
        ctx.bezierCurveTo(x + 10, y + 65, x - 25, y + 55, x - 15, y + 35);
        ctx.bezierCurveTo(x - 35, y + 15, x - 10, y - 10, x, y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(155, 155, 155, ' + trans3 + ')';
        ctx.fill();
    }
    // redraws the c object every frame (FPS)
    function redraw3() { 
        if (y3 > -200) {
            y3 = y3 - i - 0.6;
            if (trans3 > 0 && trans3 < 1) {
                trans3 -= 0.008;
            }
        } else {
            y3 = 100;
            x3 = 330;
            trans3 = 0.9;
        }
        if (x3 < 355 && x3 > 305) {
            x3 += 0.2;
        }
        drawSmoke3(x3, y3);
        //schedules the function to be run on the next frame
        requestAnimationFrame(redraw3); 
    }
    redraw3();
    // runs the move function every second (10- milliseconds)
    setInterval(redraw3(), 10); 
}
// draws and animates the fourth puff
function smoke4() {
    var x4 = 330;
    var y4 = 110;
    var trans4 = 0.9;
    // draws the fourth smoke puff
    function drawSmoke4(x4, y4) {
        var x = x4;
        var y = y4;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.bezierCurveTo(x, y - 20, x + 40, y - 20, x + 40, y + 5);
        ctx.bezierCurveTo(x + 65, y, x + 70, y + 40, x + 50, y + 40);
        ctx.bezierCurveTo(x + 53, y + 60, x + 23, y + 65, x + 20, y + 55);
        ctx.bezierCurveTo(x + 10, y + 65, x - 25, y + 55, x - 15, y + 35);
        ctx.bezierCurveTo(x - 35, y + 15, x - 10, y - 10, x, y);
        ctx.closePath();
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(120, 120, 120, ' + trans4 + ')';
        ctx.fill();
    }
    // redraws the c object every frame (FPS)
    function redraw4() { 
        if (y4 > -200) {
            y4 = y4 - i;
            if (trans4 > 0 && trans4 < 1) {
                trans4 -= 0.004;
            }
        } else {
            y4 = 100;
            x4 = 330;
            // resets opacity
            trans4 = 0.1;
        }
        if (x4 < 355 && x4 > 305) {
            x4 += 0.3;
        }
        //draw the smoke
        drawSmoke4(x4, y4);
        //schedules the function to be run on the next frame
        requestAnimationFrame(redraw4); 
    }
    redraw4();
    // run the move function every second (10- milliseconds)
    setInterval(redraw4(), 10); 
}
smoke();
smoke2();
smoke3();
smoke4();