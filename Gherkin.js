/* eslint-disable no-undef, no-unused, no-unused-vars */

// Daniel Shiffman
// function createGherkin() {

function createGherkin(GherkinX) {
  // pgGherkin = createGraphics(windowWidth / 4, windowHeight);
  var NumFloors = 20;
  var NumVisibleFloors = 13;
  var GmidX = windowWidth / 8;

  var Gwide = windowWidth / 8;
  Gwide = windowHeight / 4;
  var Ghite = windowHeight * 0.75;
  var GherkinY = windowHeight / 1.44; //  Y AXIS center of ellipse
  fill(12, 64, 94);
  stroke(0, 0, 0);
  noStroke();
  ellipse(GherkinX + Gwide, GherkinY, Gwide, Ghite);

  strokeWeight(1);
  stroke(3);
  var GY = [];
  for (var p = 0; p < NumFloors; p++)
    GY[p] = getGherkinY3(GherkinY, p, Ghite, NumFloors);

  var GPSx = [[0, 0, 0, 0]];
  for (p = 0; p < NumFloors; p++) {
    push([0, 0, 0, 0]);
    GPSx[p] = getPositionPointsGherkinLine(
      GY[p],
      Gwide,
      GherkinY,
      Gwide,
      Ghite,
      GherkinX
    );
  }

  push();
  strokeWeight(2);
  stroke(50, 240, 100, 25);
  fill(50, 240, 100, 25);
  strokeWeight(1);

  for (p = 2; p < NumVisibleFloors; p++) {
    var AvgY = (GY[p - 1] + GY[p]) * 0.5;
    var AvgX = getPositionPointsGherkinLine(
      AvgY,
      Gwide,
      GherkinY,
      Gwide,
      Ghite,
      GherkinX
    );
    line(+AvgX[1], AvgY, +AvgX[7], AvgY);
    line(+AvgX[1], AvgY, +AvgX[7], AvgY);
    line(+AvgX[1], AvgY, +AvgX[7], AvgY);
  }
  pop();

  drawGherkinTriangles2(GPSx, GY, NumVisibleFloors);
  topGherkinBlackTriangles2(GPSx, GY);
  blankGherkinBottom(
    GPSx,
    GY,
    NumFloors,
    NumVisibleFloors,
    Gwide,
    Ghite,
    GherkinX
  );
}

function blankGherkinBottom(GPSx, GY, NumFloors, NumVisibleFloors, GherkinX) {
  push();
  fill(0, 0, 0);
  noStroke();
  var www = GPSx[NumVisibleFloors][7] - GPSx[NumVisibleFloors][1];
  var hhh = GY[NumFloors - 1] - GY[NumVisibleFloors];
  noStroke();
  rect(GPSx[12][1] - 400, GY[NumVisibleFloors + 1], www * 20, hhh);
  pop();
}

function topGherkinBlackTriangles2(GPS, GY) {
  fill(0, 0, 0);
  stroke(0, 0, 0);
  var YYY = (GY[1] + GY[2]) / 2;
  for (var i = 1; i < 7; i++) {
    var XXX = (GPS[1][i] + GPS[1][i + 1] + GPS[2][i] + GPS[2][i + 1]) / 4;
    triangle(GPS[1][i], GY[1], GPS[1][i + 1], GY[1], XXX, YYY);
  }
}

function drawGherkinTriangles2(GPS, GY, NumVisibleFloors) {
  stroke(50, 240, 100, 25);
  fill(50, 240, 100, 25);
  strokeWeight(1);
  // var temp = GPS.length;

  for (var p = 1; p < NumVisibleFloors + 1; p++) {
    for (var t = 1; t < 7; t++) {
      push();
      if (
        t - 3 === p ||
        t === p ||
        t + 3 === p ||
        t + 6 === p ||
        t + 9 === p ||
        p > NumVisibleFloors
      ) {
        stroke(0, 0, 0);
        fill(0, 0, 0);
      }

      triangle(
        GPS[p + 0][t],
        GY[p + 0],
        GPS[p + 1][t],
        GY[p + 1],
        GPS[p + 1][t + 1],
        GY[p + 1]
      );
      pop();

      push();
      if (p > NumVisibleFloors) {
        stroke(0, 0, 0);
        fill(0, 0, 0);
      }

      noFill();
      triangle(
        GPS[p + 0][t],
        GY[p + 0],
        GPS[p + 0][t + 1],
        GY[p + 0],
        GPS[p + 1][t],
        GY[p + 1]
      );
      stroke(50, 240, 100, 25);
      fill(50, 240, 100, 25);
      if (
        t - 2 === p ||
        t + 1 === p ||
        t + 4 === p ||
        t + 7 === p ||
        t + 10 === p ||
        p > NumVisibleFloors
      ) {
        stroke(0, 0, 0);
        fill(0, 0, 0);
      }

      triangle(
        GPS[p + 0][t],
        GY[p + 0],
        GPS[p + 0][t + 1],
        GY[p + 0],
        GPS[p + 1][t + 1],
        GY[p + 1]
      );
      pop();
    }
  }
}

function getGherkinY3(GherkinY, Iindex, Ghite, NumFloors) {
  return -Ghite / 2 + GherkinY + Iindex * (Ghite / NumFloors);
}

function getPositionPointsGherkinLine(
  GY2,
  GherkinX,
  GherkinY,
  Gwide,
  Ghite,
  NewGX
) {
  var GPS2 = [[0, 0, 0, 0]];
  var y2 = Math.pow(Ghite / 2, 2);
  var x2 = Math.pow(Gwide / 2, 2);
  var P = abs(GY2 - GherkinY);
  var Q = Math.pow(x2 * (1 - Math.pow(P, 2) / y2), 0.5);
  var CosWidth = 0;
  for (var a = 0; a < 4; a++) CosWidth = CosWidth + cos((a * PI) / 12);
  for (var p = 0; p < 4; p++) {
    var spread = (Q * p * 1.635 * cos((p * PI) / 12)) / CosWidth;
    GPS2[4 - p] = NewGX + GherkinX - spread;
    GPS2[4 + p] = NewGX + GherkinX + spread;
  }
  return GPS2;
}
