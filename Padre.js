/* eslint-disable no-undef, no-unused, no-unused-vars */
class PadreSign {
  constructor() {
    // this.nL = 0;
    this.step = 0;
  }

  render(signTime) {
    this.step = this.step + 1;
    if (this.step > 20000) this.step = 1;

    background(0, 10, 50);
    var Ocenter = [windowWidth / 2, windowHeight / 2];
    stroke(250);
    // fill(0);
    var WW = min(windowHeight * (19 / 13), windowWidth) * 0.95;
    var WH = WW / (19 / 13);
    translate(Ocenter[0] / 1, Ocenter[1] / 1);
    clockTower(WW, WH, signTime);

    stroke(45);
    fill(45);
    var ttt = 2 * abs(100 - (this.step % 200)) - 100;
    ttt = (WW * ttt) / 150;
    strokeWeight(1);

    var Yspot = WW / (4 + random(0.2));
    triangle(-WW / 4.5, -WH / 2, ttt - WW / 16, Yspot, ttt + WW / 16, Yspot);
    fill(55);
    ellipse(ttt, Yspot, WW / 8, WW / 12);

    stroke(10);
    strokeWeight(WW / 150);
    line(-WW / 1.8, -(6.1 * WH) / 13, WW / 3.4, -(6.1 * WH) / 13); //top horiz
    line(-WW / 1.8, -(3.5 * WH) / 13, WW / 3.4, -(3.5 * WH) / 13); // 2nd horiz
    line(-WW / 1.8, -(1.5 * WH) / 13, WW / 3.4, -(1.5 * WH) / 13); // 3rd horiz
    line(-WW / 1.8, +(1.5 * WH) / 13, WW / 3.4, +(1.5 * WH) / 13); // 4th horiz
    line(-WW / 2, -(6.1 * WH) / 13, -WW / 2, WH); // left vertical
    line(-WW / 4, -(6.1 * WH) / 13, -WW / 4, WH); // 2nd vertical
    line(0, -(6.1 * WH) / 13, 0, WH); // 3rd vertical
    line((4.5 * WW) / 19, -(6.1 * WH) / 13, (4.5 * WW) / 19, WH); // 4th vertical
    line(-WW / 2, -(3.5 * WH) / 13, (-2 * WW) / 19, WH / 2); // big angle left
    line((4.5 * WW) / 19, -(3.5 * WH) / 13, (-2 * WW) / 19, WH / 2); // big angle rite
    line(-WW / 4, 0, 0, 0);
    line(-WW / 4, (1.5 * WH) / 13, -WW, WH);
    line(0, (1.5 * WH) / 13, WW - WW / 4, WH);
    fill(0);
    stroke(0);
    var ppp = 0.0625 / 2;
    arc((-2 * WW) / 19, WH / 3, 3 * WW, 3 * WW, PI * ppp, PI * (1 - ppp));

    var ltrWH = [
      (WW * 2.0) / 19,
      (WH * 3.5) / 13,
      (WW * 2.0) / 38,
      (WH * 3.5) / 26
    ];
    printAll("P", ltrWH, WW, (-8 * WW) / 19, (-4.25 * WH) / 13);
    printAll("A", ltrWH, WW, (-5 * WW) / 19, (-4.25 * WH) / 13);
    printAll("D", ltrWH, WW, (-2 * WW) / 19, (-4.25 * WH) / 13);
    printAll("R", ltrWH, WW, (+1 * WW) / 19, (-4.25 * WH) / 13);
    printAll("E", ltrWH, WW, (+4 * WW) / 19, (-4.25 * WH) / 13);
    printAll("H", ltrWH, WW, (-8 * WW) / 19, (+0.25 * WH) / 13);
    printAll("O", ltrWH, WW, (-5 * WW) / 19, (+0.25 * WH) / 13);
    printAll("T", ltrWH, WW, (-2 * WW) / 19, (+0.25 * WH) / 13);
    printAll("E", ltrWH, WW, (+1 * WW) / 19, (+0.25 * WH) / 13);
    printAll("L", ltrWH, WW, (+4 * WW) / 19, (+0.25 * WH) / 13);
  }
}

function padreLetterFont(j, WW) {
  strokeWeight((WW * 2) / (j * 90));
  var ppp = [0, 0, 60, 120, 180, 240, 255][j];
  ppp = ppp + random(-30, 30);
  stroke(255, ppp, 0);
  noFill();
}
function printAll(letter, ltrWH, WW, t1, t2) {
  push();
  strokeCap(SQUARE);
  translate(t1, t2);
  if (letter === "D") rotate(0.02);
  if (letter === "T") rotate(-0.035);

  for (var j = 1; j < 5; j++) {
    padreLetterFont(j, WW);
    beginShape();
    if (letter === "P") printP(ltrWH, WW, t1, t2);
    if (letter === "A") printA(ltrWH, WW, t1, t2);
    if (letter === "D") printD(ltrWH, WW, t1, t2);
    if (letter === "R") printR(ltrWH, WW, t1, t2);
    if (letter === "E") printE(ltrWH, WW, t1, t2);
    if (letter === "H") printH(ltrWH, WW, t1, t2);
    if (letter === "O") printO(ltrWH, WW, t1, t2);
    if (letter === "T") {
      vertex(0, ltrWH[3]);
      vertex(0, ltrWH[3]);
      vertex(0, -ltrWH[3]);
      vertex(-ltrWH[2] * 1.3, -ltrWH[3]);
      vertex(ltrWH[2] * 1.3, -ltrWH[3]);
      // debugger;
      printT(ltrWH);
    }
    if (letter === "L") printL(ltrWH, WW, t1, t2);
    endShape();
  }
  pop();
}
function printT(ltrWH) {
  // debugger;
  // stop;
  vertex(0, -ltrWH[3]);
  vertex(0, ltrWH[3]);
  vertex(0, ltrWH[3]);
}
function printP(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(ltrWH[2] * 0.5, -ltrWH[3]);
  vertex(ltrWH[2], -ltrWH[3] * 0.75);
  vertex(ltrWH[2], -ltrWH[3] * 0.25);
  vertex(ltrWH[2], -ltrWH[3] * 0.25);
  vertex(ltrWH[2] * 0.5, 0);
  vertex(-ltrWH[2], 0);
  vertex(-ltrWH[2], 0);
}

function printA(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(0, -ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(+ltrWH[2] / 1.33, 0.5 * ltrWH[3]);
  vertex(-ltrWH[2] / 1.33, 0.5 * ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
}
function printD(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(ltrWH[2] * 0.5, -ltrWH[3]);
  vertex(ltrWH[2], -ltrWH[3] * 0.75);
  vertex(ltrWH[2], -ltrWH[3] * 0.25);
  vertex(ltrWH[2], ltrWH[3] * 0.75);
  vertex(ltrWH[2] * 0.5, ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
}
function printR(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(ltrWH[2] * 0.5, -ltrWH[3]);
  vertex(ltrWH[2], -ltrWH[3] * 0.6);
  vertex(ltrWH[2], -ltrWH[3] * 0.1);
  vertex(ltrWH[2] * 0.5, ltrWH[3] * 0.3);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2] * 0.5, ltrWH[3] * 0.3);
  vertex(-ltrWH[2], ltrWH[3] * 0.3);

  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
}
function printE(ltrWH, WW, t1, t2) {
  vertex(ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(ltrWH[2], -ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);

  vertex(-ltrWH[2], 0);
  vertex(ltrWH[2] * 0.25, 0);
  vertex(-ltrWH[2], 0);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
}
function printH(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(-ltrWH[2], 0);
  vertex(ltrWH[2], 0);
  vertex(ltrWH[2], -ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2], 0);
  vertex(-ltrWH[2], 0);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
}
function printO(ltrWH, WW, t1, t2) {
  vertex(-ltrWH[2] * 0.5, ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3] * 0.6);
  vertex(-ltrWH[2], -ltrWH[3] * 0.6);
  vertex(-ltrWH[2] * 0.5, -ltrWH[3]);
  vertex(ltrWH[2] * 0.5, -ltrWH[3]);
  vertex(ltrWH[2], -ltrWH[3] * 0.6);
  vertex(ltrWH[2], ltrWH[3] * 0.6);
  vertex(ltrWH[2] * 0.5, ltrWH[3]);
  vertex(-ltrWH[2] * 0.5, ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3] * 0.6);
}

function printL(ltrWH, WW, t1, t2) {
  vertex(ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(-ltrWH[2], -ltrWH[3]);
  vertex(-ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
  vertex(ltrWH[2], ltrWH[3]);
}
function clockTower(WW, WH, signTime) {
  push();
  fill(0);
  stroke(0);
  translate((7.5 * WW) / 19, (+2 * WH) / 13);

  var clockSide = [(3 * WW) / 19, (3 * WW) / 38];
  rect(-clockSide[1] * 1.2, -WH / 6, clockSide[0] * 1.2, 1000);
  ellipse(0, -WH / 6, WH / 4.5);
  rect(-WW / 48, -WH / 3.3, WW / 24, WW / 24);
  strokeWeight(WW / 400);
  triangle(-WW / 96, -WH / 3.5, WW / 96, -WH / 3.5, 0, -WH / 2);

  ellipse(0, -WH / 2.8, WW / 30, WW / 70); // Steeple adornment
  for (var j = 0; j < 2; j++) {
    stroke(j * 250, j * 250, 250);
    strokeWeight(WW / (50 + 250 * j));
    fill(0, 0, 120);
    rect(-clockSide[1], -clockSide[1], clockSide[0], clockSide[0]);
  }
  for (j = 1; j < 13; j++) {
    var clAngle = PI + (PI * j * 2) / 12;
    var sinCos = [-sin(clAngle), cos(clAngle)];
    var numberDist = clockSide[0] / 2.5;

    stroke(150, 0, 0);
    strokeWeight(WW / 100);
    ellipse(
      numberDist * sinCos[0] + WW / 500,
      numberDist * sinCos[1],
      WW / 100
    );
    strokeWeight(WW / 400);
    stroke(250, 250, 0);
    textSize(WW / 100);
    text(j, numberDist * sinCos[0], numberDist * sinCos[1]);
  }
  clockTime(WW, WH, clockSide, signTime);
  pop();
}

function clockTime(WW, WH, clockSide, signTime) {
  fill(0);
  stroke(255, 255, 0);
  var ppp = signTime[1] + signTime[2] / 60;
  var currentMinute = (PI * ((135 - +ppp) % 60)) / 30;
  var handAdj = windowWidth / 25;
  var MinSine = handAdj * sin(currentMinute);
  var MinCos = handAdj * cos(currentMinute);
  line(0, 0, +MinCos, -MinSine); // minute

  var currentHour = 5 * (hour() + ppp / 60);
  currentHour = (135 - currentHour) % 60;
  currentHour = (PI * currentHour) / 30;
  MinSine = 0.75 * handAdj * sin(currentHour);
  MinCos = 0.75 * handAdj * cos(currentHour);
  line(0, 0, MinCos, -MinSine); // minute
}
