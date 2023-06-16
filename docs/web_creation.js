var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// define the donut
var cX = Math.floor(canvas.width / 2);
var cY = Math.floor(canvas.height / 2);
var radius = Math.min(cX, cY) * 0.75;

// the datapoints
var data = [71,29];

// colors to use for each datapoint
var colors = ["#2d37ed", "white"];

// track the accumulated arcs drawn so far
var totalArc = 0;

// draw a wedge
function drawWedge2(percent, color) {
  var arcRadians = (percent / 100) * 360 * (Math.PI / 180);
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cX, cY);
  ctx.arc(cX, cY, radius, totalArc, totalArc + arcRadians, false);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
  totalArc += arcRadians;
}

// draw the donut one wedge at a time
function drawDonut() {
  for (var i = 0; i < data.length; i++) {
    drawWedge2(data[i], colors[i]);
  }
  // cut out an inner-circle == donut
  ctx.beginPath();
  ctx.moveTo(cX, cY);
  ctx.fillStyle = "#ffffff"; // Color for the inner circle
  ctx.arc(cX, cY, radius * 0.60, 0, 2 * Math.PI, false);
  ctx.fill();
}

// draw the background gradient


// draw the donut
drawDonut();


