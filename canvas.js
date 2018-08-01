window.onload = function() {
    
    var canvas = document.getElementsByTagName('canvas');
    var properties;
    var width;
    var height;
    
    for (var i = 0; i < canvas.length; i++) {
        properties = window.getComputedStyle(canvas[i]);        
        height =  properties.height.slice(0, -1).slice(0, -1);
        width =  properties.width.slice(0, -1).slice(0, -1);
        canvas[i].width = width;
        canvas[i].height = height;
    }
    
    // Mouse position
    
    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    }

    /* Canvas fill */

    var canvas_fill = document.getElementById("canvas-fill");
    var ctx_fill = canvas_fill.getContext("2d");

    ctx_fill.beginPath();
    ctx_fill.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx_fill.fillStyle = 'red';
    ctx_fill.fill();

    /* Canvas stroke */

    var canvas_stroke = document.getElementById("canvas-stroke");
    var ctx_stroke = canvas_stroke.getContext("2d");

    ctx_stroke.beginPath();
    ctx_stroke.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx_stroke.strokeStyle = 'red';
    ctx_stroke.stroke();

    /* Canvas strokeWeight */

    var canvas_strokeWeight = document.getElementById("canvas-strokeWeight");
    var ctx_strokeWeight = canvas_strokeWeight.getContext("2d");

    ctx_strokeWeight.beginPath();
    ctx_strokeWeight.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx_strokeWeight.lineWidth = 5;
    ctx_strokeWeight.strokeStyle = 'red';
    ctx_strokeWeight.stroke();

    /* Canvas circle */

    var canvas_circle = document.getElementById("canvas-circle");
    var ctx_circle = canvas_circle.getContext("2d");

    ctx_circle.beginPath();
    ctx_circle.arc(150, 50, 20, 0, 2 * Math.PI);
    ctx_circle.fillStyle = 'yellow';
    ctx_circle.fill();
    
    /* Canvas rect */

    var canvas_rect = document.getElementById("canvas-rect");
    var ctx_rect = canvas_rect.getContext("2d");

    ctx_rect.beginPath();
    ctx_rect.rect(50, 50, 50, 20);
    ctx_rect.strokeStyle = 'green';
    ctx_rect.stroke();
    
    /* Canvas line */

    var canvas_line = document.getElementById("canvas-line");
    var ctx_line = canvas_line.getContext("2d");

    ctx_line.beginPath();
    ctx_line.moveTo(0, 0);
    ctx_line.lineTo(100, 100);
    ctx_line.strokeStyle = 'blue';
    ctx_line.stroke();
    
    /* Canvas point */

    var canvas_point = document.getElementById("canvas-point");
    var ctx_point = canvas_point.getContext("2d");

    ctx_point.beginPath();
    ctx_point.moveTo(20, 20);
    ctx_point.lineTo(21, 21);
    ctx_point.strokeStyle = 'red';
    ctx_point.stroke();
    ctx_point.beginPath();
    ctx_point.moveTo(50, 80);
    ctx_point.lineTo(51, 81);
    ctx_point.strokeStyle = 'white';
    ctx_point.stroke();
    
    /* Canvas mousePressed */

    var canvas_mousePressed = document.getElementById("canvas-mousePressed");
    var ctx_mousePressed = canvas_mousePressed.getContext("2d");
    
    window.onmousedown = function() {
        ctx_mousePressed.beginPath();
        ctx_mousePressed.arc(100, 100, 30, 0, 2 * Math.PI);
        ctx_mousePressed.fillStyle = '#666';
        ctx_mousePressed.fill();
    };
    
    window.onmouseup = function() {
        ctx_mousePressed.clearRect(0, 0, canvas_mousePressed.width, canvas_mousePressed.height);
    };
    
    /* Canvas mouseX */

    var canvas_mouseX = document.getElementById("canvas-mouseX");
    var ctx_mouseX = canvas_mouseX.getContext("2d");
    
    window.addEventListener('mousemove', function(e) {
        ctx_mouseX.clearRect(0, 0, canvas_mouseX.width, canvas_mouseX.height);
        var pos = getMousePos(canvas_mouseX, e);
        ctx_mouseX.beginPath();
        ctx_mouseX.moveTo(pos.x, 0);
        ctx_mouseX.lineTo(pos.x, 100);
        ctx_mouseX.strokeStyle = 'black';
        ctx_mouseX.stroke();        
    }, false);
};