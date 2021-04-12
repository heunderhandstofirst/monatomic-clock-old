/* eslint-disable no-undef, no-unused, no-unused-vars */
/* eslint-disable no-undef, no-unused, no-unused-vars,no-loop-func */

function createOXO(XColor, Acolor, signTime) {
  var newCad = [0.2, 0.8];
  towerCenter = windowWidth / 2;
  Ymid = windowHeight / 2;
  letterWidth = windowHeight / 4;
  setStrokeWeight = windowHeight / 375;

  strokeWeight(0);
  fill(0); // fill(230, 184, 69);
  stroke(0); // stroke(220, 220, 0);

  rect(towerCenter - windowHeight / 6, 0, windowHeight / 3, windowHeight);

  AnglePoints = getAnglePoints(towerCenter, letterWidth);
  drawCircles(letterWidth, towerCenter, Acolor, newCad);
  drawWhiteBox(letterWidth, towerCenter);
  colorTheX(XColor, signTime[1] % 5);
  changeXcolors(XColor);
  changeAcolors(Acolor);
}
function drawWhiteBox(LW4, TC4) {
  stroke(255);
  fill(0, 0, 0);
  strokeWeight(5);
  rect(TC4 - LW4 / 2, (windowHeight - LW4) / 2, LW4, LW4);
  formOXOgrid(Ymid, TC4, LW4);
}
function drawCircles(LW3, TC1, ACCC, cad3) {
  for (var k = 0; k < 2; k++) {
    fill(0, 0, 0);
    ellipse(TC1, cad3[k] * windowHeight, 0.9 * LW3);

    formOXOgrid(cad3[k] * windowHeight, TC1, LW3);
    strokeWeight(LW3 / 10);
    noFill();
    stroke(255, 255, 255);
    ellipse(TC1, cad3[k] * windowHeight, 0.9 * LW3);

    stroke(0, 0, 0);
    ellipse(TC1, cad3[k] * windowHeight, 0.95 * LW3);

    stroke(255, 255, 255);
    ellipse(TC1, cad3[k] * windowHeight, 0.99 * LW3);
  }
  for (k = 0; k < 2; k++) {
    colorTheArc(k, LW3, TC1, ACCC, cad3);
    stroke(0, 0, 0);
  }
}
function colorTheArc(whichArc, LW5, TC5, AC3, cad5) {
  var cs = LW5 * 1.05;
  strokeCap(SQUARE);
  noFill();
  strokeWeight(windowHeight / 48);

  for (var j = 0; j < 4; j++) {
    var bbb = int(AC3[whichArc * 4 + j]);
    stroke(color("hsla(" + bbb + ", 100%, 50%, 1)"));
    var ss1 = (j * PI) / 2 + PI / 4;
    var ss2 = ss1 + PI / 2;
    arc(TC5, cad5[whichArc] * windowHeight, cs, cs, ss1, ss2);
  }
  darkenTheArcs(cad5, LW5, whichArc, TC5);
  WhiteX(LW5, whichArc, TC5, cad5);
}

function darkenTheArcs(CadjB, lW1, whichArc, TC1) {
  stroke(0);
  strokeWeight(lW1 / 24);
  strokeCap(ROUND);
  var cs = lW1 * 1.05;
  for (j = 0; j < 4; j++) {
    ss1 = (j * PI) / 2 - PI / 5.4;
    ss2 = ss1 + PI / 2.7;
    arc(TC1, CadjB[whichArc] * windowHeight, cs, cs, ss1, ss2);
  }
}

function WhiteX(LW2, whichArc, TC2, cad2) {
  var CLAW = (0.8 * LW2) / 2;
  var cadWH = cad2[whichArc] * windowHeight;

  for (i = 0; i < 2; i++) {
    stroke(255 - 255 * i);
    strokeWeight(LW2 / (10 + i * 10));
    line(TC2 - CLAW, cadWH - CLAW, TC2 + CLAW, cadWH + CLAW);
    line(TC2 + CLAW, cadWH - CLAW, TC2 - CLAW, cadWH + CLAW);
    stroke(0);
    strokeWeight(LW2 / 12);
    ellipse(TC2, cadWH, 1.2 * LW2);
  }
}

function colorTheX(Xcolor, minBox) {
  var boxLineW = windowHeight / 375;
  for (j = 0; j < 5; j++) {
    for (var k = 0; k < 7; k++) {
      push();
      strokeWeight(0);
      fill(color("hsla(" + int(Xcolor[j][k]) + ", 100%, 50%, 1)"));

      if (j >= minBox && k === 6 && j !== 4) fill(0);

      beginShape();
      vertex(
        AnglePoints[BoxCombos[j][0]][0],
        AnglePoints[BoxCombos[j][0]][1] + 1 * k * boxLineW
      );
      vertex(
        AnglePoints[BoxCombos[j][1]][0] + -1 * k * boxLineW,
        AnglePoints[BoxCombos[j][1]][1]
      );
      vertex(
        AnglePoints[BoxCombos[j][2]][0],
        AnglePoints[BoxCombos[j][2]][1] + -1 * k * boxLineW
      );
      vertex(
        AnglePoints[BoxCombos[j][3]][0] + +1 * k * boxLineW,
        AnglePoints[BoxCombos[j][3]][1]
      );
      endShape(CLOSE);
      pop();
    }
  }
}

function getAnglePoints(tC, LW6) {
  var AnglePoints = [];
  AnglePoints[0] = [tC - LW6 / 3, (windowHeight - LW6) / 2];
  AnglePoints[1] = [tC + LW6 / 3, (windowHeight - LW6) / 2];
  AnglePoints[3] = [tC + LW6 / 3, (windowHeight + LW6) / 2];
  AnglePoints[4] = [tC - LW6 / 3, (windowHeight + LW6) / 2];
  AnglePoints[6] = [tC + LW6 / 2, Ymid - LW6 / 3];
  AnglePoints[7] = [tC + LW6 / 2, Ymid + LW6 / 3];
  AnglePoints[8] = [tC - LW6 / 2, Ymid + LW6 / 3];
  AnglePoints[9] = [tC - LW6 / 2, Ymid - LW6 / 3];
  AnglePoints[2] = [tC, Ymid - LW6 / 6];
  AnglePoints[11] = [tC + LW6 / 6, Ymid];
  AnglePoints[5] = [tC, Ymid + LW6 / 6];
  AnglePoints[10] = [tC - LW6 / 6, Ymid];

  return AnglePoints;
}

function formOXOgrid(Ymida, TC7, LW7) {
  stroke(255);
  strokeWeight(windowHeight / 375);

  var BoxTop = Ymida - LW7 / 2;
  var BoxBot = Ymida + LW7 / 2;
  var iLW6;
  for (var i = -2; i < 3; i++) {
    iLW6 = (i * LW7) / 6;
    line(TC7 - LW7 / 2, Ymida + iLW6, TC7 - iLW6, BoxBot);
    line(TC7 - iLW6, BoxTop, TC7 + LW7 / 2, Ymida + iLW6);
    line(TC7 - iLW6, BoxTop, TC7 - LW7 / 2, Ymida - iLW6);
    line(TC7 + LW7 / 2, Ymida + iLW6, TC7 + iLW6, BoxBot);
  }
}

function changeXcolors(XC) {
  var ttt = random([0, 1, 2, 3, 4]);
  for (var j = 0; j < 7; j++) XC[ttt][j] = int(noisyColor(XC[ttt][j]));
}

function changeAcolors(AC5) {
  var ttt = random([0, 1, 2, 3, 4, 5, 6, 7]);
  AC5[ttt] = noisyColor(AC5[ttt]);
}
