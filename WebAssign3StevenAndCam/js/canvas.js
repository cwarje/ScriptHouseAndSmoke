function drawHouse() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    //front of house
    ctx.fillStyle = '#50CC60';
    ctx.beginPath();
    ctx.moveTo(190, 460); //bottom left front corner
    ctx.lineTo(445, 430);
    ctx.lineTo(445, 290);
    ctx.lineTo(370, 240);
    ctx.lineTo(370, 190);
    ctx.lineTo(190, 280);
    ctx.closePath();
    ctx.fill();
    
    //left wall
    ctx.fillStyle = '#41B050';
    ctx.beginPath();
    ctx.moveTo(190,460); //bottom left front corner
    ctx.lineTo(190,280);
    ctx.lineTo(150,280);
    ctx.lineTo(150,420);
    ctx.closePath();
    ctx.fill();
    
    //roof top
    ctx.fillStyle = '#757575';
    ctx.beginPath();
    ctx.moveTo(185,290); //bottom middle corner of roof
    ctx.lineTo(390,185);
    ctx.lineTo(300,200);
    ctx.lineTo(130,285);
    ctx.closePath();
    ctx.fill();
    
    //roof front
    ctx.fillStyle = '#525252';
    ctx.beginPath();
    ctx.moveTo(185,290); //bottom middle corner of roof
    ctx.lineTo(390,185);
    ctx.lineTo(390,190);
    ctx.lineTo(185,295);
    ctx.closePath();
    ctx.fill();
    
    //roof left side
    ctx.fillStyle = '#666';
    ctx.beginPath();
    ctx.moveTo(185,290); //bottom middle corner of roof
    ctx.lineTo(130,285);
    ctx.lineTo(130,290);
    ctx.lineTo(185,295);
    ctx.closePath();
    ctx.fill();
}

drawHouse();