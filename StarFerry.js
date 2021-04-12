/* eslint-disable no-undef, no-unused, no-unused-vars */
class StarFerrySign {
  constructor() {
    this.nL = 0;
  }
  increment() {
    this.step = this.step + 1;
    if (SwitchSign) this.step = 0;
  }

  render(signTime) {
    background(0);
    var Ocenter = [windowWidth / 2, windowHeight / 2];
    var WH = windowHeight;
    var WW = min(WH * 1.75, windowWidth) * 0.95;
    WH = WW / 1.75;
    var leftEdge = (-WW * 44) / 152;
    var starSize = WH * 0.8352;
    strokeWeight(0);
    push();
    translate(Ocenter[0], Ocenter[1]);
    stroke(0);
    fill(0);
    translate((-WW * (152 - 88)) / (2 * 152), 0);
    fill(0, 0, 250);
    arc(0, 0, WH, WH, 0, PI + PI / 4);
    fill(250, 0, 0);
    arc(0, 0, WH, WH, PI - PI / 72, 0 + PI / 36);
    rect(leftEdge, 0, WW * (88 / 152), WH / 16);
    noFill();
    ellipse(0, 0, WH);

    stroke(250);
    strokeWeight(WW / 36);
    for (var j = 0; j < 2; j++) {
      var curveShift = WH / 24 + (j * WH) / 10;
      beginShape();
      curveVertex(leftEdge, curveShift);
      curveVertex(leftEdge, curveShift);
      curveVertex(leftEdge + (WW * 18) / 152, curveShift + WH / 24);
      curveVertex(leftEdge + (WW * 40) / 152, curveShift - WH / 64);
      curveVertex(leftEdge + (WW * 54) / 152, curveShift + (WH * 1.5) / 48);
      curveVertex(leftEdge + (WW * 72) / 152, curveShift + (WH * 1) / 64);
      curveVertex(leftEdge + (WW * 88) / 152, curveShift + (WH * 2) / 48);
      curveVertex(leftEdge + (WW * 88) / 152, curveShift + (WH * 2) / 48);
      endShape();
    }
    //////////////  STAR SHAPE
    strokeWeight(0);
    fill(0, 250, 0);
    fill(255);
    var coss = [(starSize * cos(0.3 * PI)) / 2, (starSize * cos(1.1 * PI)) / 2];
    var sins = [(starSize * sin(0.3 * PI)) / 2, (starSize * sin(1.1 * PI)) / 2];
    beginShape();
    vertex(0, -starSize / 2);
    vertex(0, -starSize / 2);
    vertex(coss[0], sins[0]);
    vertex(coss[1], sins[1]);
    vertex(-coss[1], sins[1]);
    vertex(-coss[0], sins[0]);
    vertex(0, -starSize / 2);
    vertex(0, -starSize / 2);
    endShape();
    ///////  CLEAN UP CIRCLE
    noFill();
    stroke(0);
    strokeWeight(WW / 24);
    ellipse(0, 0, WH + WW / 24);
    ////////////////////////////////////////////////

    strokeWeight(0);
    stroke(0, 100, 0);
    fill(0, 100, 0);
    translate(WW / 2, -WH / 6);
    var fanLen = WW / 6;
    var oppo = fanLen * sin(radians(135 / 12));
    var time2color = 11 - (11 * ((signTime[1] % 5) + signTime[2] / 60)) / 5;

    push();
    rotate(radians(-22.5));

    for (j = 0; j < 11; j++) {
      fill(0, 150, 0);
      if (time2color >= j) fill(0, 100, 100);
      triangle(0, 0, fanLen, 0, fanLen, -oppo);
      rotate(radians(-135 / 11));
    }
    pop();
    fill(0);
    ellipse(0, 0, WH / 14);
    stroke(0);
    strokeWeight(WH / 300);
    noFill();
    ellipse(0, 0, WH / 5);
    /////////////////////////////////////////////
    translate(0, WH / 7);
    stroke(250);
    noFill();
    var sideBot = [WW / (4 * 28), WH / 14];
    for (j = 2; j > -1; j = j - 1) {
      strokeWeight(15);
      if (j === 0) {
        strokeWeight(8);
        stroke(0, 250, 0);
      }
      if (j === 2) {
        push();
        translate(-WW / 48, WH / 48);
        strokeWeight(2);
        stroke(0, 100, 0);
      }
      beginShape();
      flashGreenDS(j);
      curveVertex(-10 * sideBot[0], sideBot[1]);
      curveVertex(-10 * sideBot[0], sideBot[1]);
      curveVertex(-10 * sideBot[0], -sideBot[1]);
      curveVertex(-4 * sideBot[0], 0);
      curveVertex(-10 * sideBot[0], sideBot[1]);
      curveVertex(-10 * sideBot[0], sideBot[1]);
      endShape();
      flashGreenDS(j);

      beginShape();
      curveVertex(-1 * sideBot[0], sideBot[1]);
      curveVertex(-1 * sideBot[0], sideBot[1]);
      curveVertex(-1 * sideBot[0], -sideBot[1]);
      curveVertex(-1 * sideBot[0], -sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(2 * sideBot[0], sideBot[1]);
      curveVertex(2 * sideBot[0], sideBot[1]);
      curveVertex(2 * sideBot[0], -sideBot[1]);
      curveVertex(6 * sideBot[0], sideBot[1]);
      curveVertex(10 * sideBot[0], -sideBot[1]);
      curveVertex(10 * sideBot[0], sideBot[1]);
      curveVertex(10 * sideBot[0], sideBot[1]);
      endShape();

      translate(0, WH / 5);
      flashGreenDS(j);
      beginShape();
      curveVertex(-6 * sideBot[0], -0.5 * sideBot[1]);
      curveVertex(-6 * sideBot[0], -0.5 * sideBot[1]);
      curveVertex(-10 * sideBot[0], -sideBot[1]);
      curveVertex(-14 * sideBot[0], -0.5 * sideBot[1]);
      curveVertex(-10 * sideBot[0], 0);
      curveVertex(-6 * sideBot[0], 0.5 * sideBot[1]);
      curveVertex(-10 * sideBot[0], sideBot[1]);
      curveVertex(-14 * sideBot[0], 0.5 * sideBot[1]);
      curveVertex(-14 * sideBot[0], 0.5 * sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(-4 * sideBot[0], -sideBot[1]);
      curveVertex(-4 * sideBot[0], -sideBot[1]);
      curveVertex(-3.8 * sideBot[0], 0.5 * sideBot[1]);
      curveVertex(0, sideBot[1]);
      curveVertex(3.8 * sideBot[0], 0.5 * sideBot[1]);
      curveVertex(4 * sideBot[0], -sideBot[1]);
      curveVertex(4 * sideBot[0], -sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(6 * sideBot[0], sideBot[1]);
      curveVertex(6 * sideBot[0], sideBot[1]);
      curveVertex(6 * sideBot[0], -sideBot[1]);
      curveVertex(10 * sideBot[0], sideBot[1]);
      curveVertex(14 * sideBot[0], -sideBot[1]);
      curveVertex(14 * sideBot[0], sideBot[1]);
      curveVertex(14 * sideBot[0], sideBot[1]);
      endShape();

      translate(0, WH / 5);
      flashGreenDS(j);
      beginShape();
      curveVertex(-16 * sideBot[0], sideBot[1]);
      curveVertex(-16 * sideBot[0], sideBot[1]);
      curveVertex(-16 * sideBot[0], -sideBot[1]);
      curveVertex(-10 * sideBot[0], 0);
      curveVertex(-16 * sideBot[0], sideBot[1]);
      curveVertex(-16 * sideBot[0], sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(-9 * sideBot[0], sideBot[1]);
      curveVertex(-9 * sideBot[0], sideBot[1]);
      curveVertex(-5 * sideBot[0], -sideBot[1]);
      curveVertex(-3 * sideBot[0], 0);
      curveVertex(-7 * sideBot[0], 0);
      curveVertex(-3 * sideBot[0], 0);
      curveVertex(-1 * sideBot[0], sideBot[1]);
      curveVertex(-1 * sideBot[0], sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(1 * sideBot[0], sideBot[1]);
      curveVertex(1 * sideBot[0], sideBot[1]);
      curveVertex(1 * sideBot[0], -sideBot[1]);
      curveVertex(1 * sideBot[0], -sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(4 * sideBot[0], -sideBot[1]);
      curveVertex(4 * sideBot[0], -sideBot[1]);
      curveVertex(4 * sideBot[0], sideBot[1]);
      curveVertex(10 * sideBot[0], sideBot[1]);
      curveVertex(10 * sideBot[0], sideBot[1]);
      endShape();
      flashGreenDS(j);
      beginShape();
      curveVertex(11 * sideBot[0], -sideBot[1]);
      curveVertex(11 * sideBot[0], -sideBot[1]);
      curveVertex(14 * sideBot[0], 0);
      curveVertex(17 * sideBot[0], -sideBot[1]);
      curveVertex(14 * sideBot[0], 0);
      flashGreenDS(j);
      curveVertex(14 * sideBot[0], sideBot[1]);
      curveVertex(14 * sideBot[0], sideBot[1]);
      endShape();
      translate(0, (-2 * WH) / 5);

      if (j === 2) pop();
    }
  }
}

function flashGreenDS(j) {
  if (j === 0 || j === 2) stroke(0, 150 + random(105), 0);
}
