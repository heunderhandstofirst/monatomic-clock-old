/* eslint-disable no-undef, no-unused, no-unused-vars */

class ManhattanBridge {
  render() {
    background(20, 20, 200);
    var Ocenter = [windowWidth / 2, windowHeight / 2];
    var WW = min(windowHeight * (75 / 70), windowWidth) * 0.99;
    var WH = WW / (85 / 70);
    var sqsz = WH / 70;
    var mmmm = -62;
    var v, t, j, k, ts, L, m;
    translate(Ocenter[0], Ocenter[1]);
    translate(0 * sqsz, -35 * sqsz);

    noFill();
    stroke(250);
    strokeWeight(WW / 1200);
    // rect(-35 * sqsz, 0, 20 * sqsz, 70 * sqsz); // rect(-5 * sqsz, 0, 20 * sqsz, 70 * sqsz);    // rect(15 * sqsz, 0, 20 * sqsz, 70 * sqsz);
    // translate(15 * sqsz, 0 * sqsz);
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    for (t = -1; t < 2; t = t + 2) {
      ts = t * sqsz;

      for (k = 0; k < 2; k++) {
        // VERTICAL LINES
        L = 6 * k;
        line(ts * (4.0 + L), 5 * sqsz, ts * (4.0 + L), 62 * sqsz);
        line(ts * (3.8 + L), 5 * sqsz, ts * (3.8 + L), 62 * sqsz);
        line(ts * (3.5 + L), (5 + 3.5) * sqsz, ts * (3.5 + L), 62 * sqsz);
        line(ts * (5.0 + L), 5 * sqsz, ts * (5.0 + L), 62 * sqsz);
        line(ts * (5.2 + L), 5 * sqsz, ts * (5.2 + L), 62 * sqsz);
        line(ts * (5.5 + L), 5 * sqsz, ts * (5.5 + L), 62 * sqsz);
      }

      var ttt = [12, 17, 22, 27, 51, 55, 59];
      for (j = 0; j < 7; j++) {
        rect(ts * (4.0 + L), ttt[j] * sqsz, ts * 1, 0.75 * sqsz);
        rect(ts * (-2.0 + L), ttt[j] * sqsz, ts * 1, 0.75 * sqsz);
      }
      verticalLights(sqsz, ts);

      ttt = [12, 17, 22, 27, 32];
      for (j = 0; j < 5; j++) {
        var t1 = ttt[j] - 2.75;
        line(ts * 5.5, t1 * sqsz, ts * 9.5, t1 * sqsz);
      }
      j = 9;
      if (t === 1)
        triShape([t * 5.6, t * 3.9], [j + 0.5, 4.5], sqsz, 0, BridgeHue4, true);
      if (t === -1)
        triShape([t * 5.6, t * 3.9], [j + 0.5, 4.5], sqsz, 0, BridgeHue5, true);

      for (j = 14; j < 32; j = j + 5) {
        triShape([t * 5.6, t * 3.9], [j + 0.5, 4.5], sqsz, 0, BridgeHue, false);
      }
      ////////////////////////////////////////////////
      j = 45;

      triShape([t * 7.6, t * 1.8], [j + 0.5, 2.5], sqsz, 0, BridgeHue, false);
      triShape([t * 5.6, t * 1.8], [j + 0.5, 2.5], sqsz, 0, BridgeHue, false);

      // CENTER SET OF 3 TRIANGLES - BOTH SETS

      var s = 10.5; // HIGHER SET
      triShape(
        [t * 1.33333, t * 2.33],
        [j + 0.5, 2.5],
        sqsz,
        0,
        BridgeHue,
        false
      );
      triShape(
        [t * 1.33333, t * 2.33],
        [j - s, 2.5],
        sqsz,
        0,
        BridgeHue,
        false
      );

      if (t === 1)
        triShape(
          [t * -1.1666, t * 2.33],
          [j - s, 2.5],
          sqsz,
          0,
          BridgeHue,
          false
        );
      if (t === 1)
        triShape(
          [t * -1.1666, t * 2.33],
          [j + 0.5, 2.5],
          sqsz,
          0,
          BridgeHue,
          false
        );

      triShape([t * 5.25, t * 2], [j - 39, 2.5], sqsz, 1, BridgeHue, false);
      triShape([t * 7.75, t * 2], [j - 39, 2.5], sqsz, 1, BridgeHue, false);
      triShape([t * 1.75, t * 2], [j - 39.0, 2.5], sqsz, 1, BridgeHue, false);
      if (t === 1)
        triShape([t * -1.0, t * 2], [j - 39, 2.5], sqsz, 1, BridgeHue, false);

      ///  CENTER JUST ABOVE LOWER ARCHH AND BELOW X's
      line(ts * 5.5, (j + 0.25) * sqsz, ts * 9.5, (j + 0.25) * sqsz);
      line(ts * 0, (j + 0.25) * sqsz, ts * 3.5, (j + 0.25) * sqsz);
      line(ts * 0, (j + 3.25) * sqsz, ts * 3.5, (j + 3.25) * sqsz);
      line(ts * 0, (j + 3.5) * sqsz, ts * 3.5, (j + 3.5) * sqsz);

      push();
      strokeWeight(sqsz * 0.2);

      bigArch(j, ts, sqsz);
      bigArch(j - 39.45, ts, sqsz);
      teenyArch(5, ts, sqsz, 0, WW);
      teenyArch(5, ts, sqsz, 1, WW);
      teenyArch(5, ts, sqsz, 2, WW);
      teenyArch(5, ts, sqsz, 3, WW);
      teenyArch(5, ts, sqsz, 4, WW);
      teenyArch(5, ts, sqsz, 5, WW);

      pop();
      ///  ABOVE AND BLEOW THE 7 TRIANGLE SETS AT THE TOP

      line(ts * 9.5, sqsz * 9, 0, sqsz * 9);
      line(ts * 10.5, sqsz * 8.5, 0, sqsz * 8.5);
      line(ts * 10.5, sqsz * 6, 0, sqsz * 6);

      // LOWER VERTICAL EDGES OF MIDDLE CNTER ARCH
      push();
      strokeWeight(sqsz * 0.2);
      var bbb = 37.85;
      var bz = [bbb, bbb + 0.5, bbb + 1, bbb + 1.5];
      bezier(
        0,
        bz[0] * sqsz,
        3.2 * ts,
        bz[1] * sqsz,
        3.25 * ts,
        bz[2] * sqsz,
        3.25 * ts,
        bz[2] * sqsz
      );
      strokeCap(SQUARE);
      line(ts * 3.25, (bbb + 1.1) * sqsz, 3.25 * ts, (bbb + 3.5) * sqsz);
      line(ts * 3.4, (bbb - 0.4) * sqsz, 3.4 * ts, (bbb + 3.5) * sqsz);

      line(ts * 1.2, (bbb - 0.4) * sqsz, ts * 1.2, (bbb + 0.22) * sqsz);
      line(ts * 2.3, (bbb - 0.4) * sqsz, ts * 2.3, (bbb + 0.42) * sqsz);

      pop();

      ///////////////////////////////////////////////

      for (j = 48; j < 60; j = j + 4) {
        rect(ts * 5.5, j * sqsz, ts * 4, 0.5 * sqsz);
        line(ts * 5.5, (j + 0.25) * sqsz, ts * 9.5, (j + 0.25) * sqsz);
        if (j === 48) {
          if (t === 1) {
            triShape(
              [t * 5.5, t * 4],
              [j + 0.5, 3.5],
              sqsz,
              0,
              BridgeHue3,
              true
            );
          } else {
            triShape(
              [t * 5.5, t * 4],
              [j + 0.5, 3.5],
              sqsz,
              0,
              BridgeHue2,
              true
            );
          }
        } else
          triShape([t * 5.5, t * 4], [j + 0.5, 3.5], sqsz, 0, BridgeHue, false);
      }

      bottom(ts, sqsz, j, WW);
      line(ts * 5.5, (60 + 0.25) * sqsz, ts * 9.5, (j + 0.25) * sqsz);
      line(ts * 5.5, 60.5 * sqsz, ts * 9.5, 60.5 * sqsz);

      for (v = 3.5; v < 15.5; v = v + 0.5) {
        ///  DOUBLE SQUARES ABOUT 40% UP FROM BOTTOM
        rect(ts * (v + 0.0), sqsz * 44.5, t * sqsz * 0.5, sqsz * 0.5);
        rect(ts * (v + 0.1), sqsz * 44.6, t * sqsz * 0.3, sqsz * 0.3);
      }

      for (v = 3.5; v > -1; v--) {
        ///  DOUBLE SQUARES ABOUT 40% UP FROM BOTTOM   IN CENTER
        rect(ts * (v + 0.0), sqsz * 44.5, t * sqsz * 1, sqsz * 0.5);
        rect(ts * (v + 0.05), sqsz * 44.55, t * sqsz * 0.9, sqsz * 0.4);
      }
      for (v = 2.5; v > -1; v--) {
        ///  RAILING   IN CENTER
        rect(ts * (v + 0.0), sqsz * 43.5, t * sqsz * 1, sqsz * 0.95);
      }

      for (v = 0; v < 6; v = v + 4.5) {
        //  Outer shorter railing 4 sets
        rect(ts * 8.65, sqsz * (39 + v), t * sqsz * 0.75, sqsz * 0.5);
        rect(ts * 7.9, sqsz * (39 + v), t * sqsz * 0.75, sqsz * 0.5);
        rect(ts * 7.05, sqsz * (39 + v), t * sqsz * 0.85, sqsz * 0.5);
        rect(ts * 6.3, sqsz * (39 + v), t * sqsz * 0.75, sqsz * 0.5);
        rect(ts * 5.55, sqsz * (39 + v), t * sqsz * 0.75, sqsz * 0.5);
      }

      /////   FOUR SETS OF VERTICAL X'S AT THE TOP
      push();
      for (s = 0; s > -4; s = s - 0.8) {
        triShape(
          [t * 10.1, t * 0.75],
          [5.0 - s, 0.75],
          sqsz,
          1,
          BridgeHue,
          false
        );
        triShape(
          [t * 4.1, t * 0.75],
          [5.0 - s, 0.75],
          sqsz,
          1,
          BridgeHue,
          false
        );
      }
      for (v = 0; v < 7; v++)
        rect(ts * (v * 1.5), 5 * sqsz, t * 1.5 * sqsz, 0.5 * sqsz);

      push();
      fill(100);
      for (v = 0; v < 54; v++)
        rect(ts * (v * 0.25), 4.5 * sqsz, 0.25 * ts, 0.5 * sqsz);
      pop();
      for (v = 0; v < 20; v++) {
        if (v > 10 || v < 8)
          ellipse(ts * (v * 0.5), 3.35 * sqsz, ts * 0.25, 0.75 * sqsz);
      }

      if (t === -1) {
        rect(sqsz * 10, 2.5 * sqsz, sqsz * -20, 0.15 * sqsz);
        fill(120);
        rect(sqsz * 13.25, 4 * sqsz, sqsz * -26.5, 0.5 * sqsz);
      }
      pop();

      ///
      /// GRAND TOP WITH GLOBES
      push();
      for (v = 3.8; v < 10; v = v + 6) {
        fill(20, 20, 200);
        rect(ts * (v + 0.1), 0.8 * sqsz, ts * 1.2, sqsz * 0.1);

        rect(ts * (v - 0.2), 1.0 * sqsz, ts * 1.8, sqsz * 1);
        rect(ts * (v - 0.1), 1.0 * sqsz, ts * 1.6, sqsz * 1);

        rect(ts * (v + 1.05), 1.2 * sqsz, ts * 0.2, sqsz * 0.6);
        rect(ts * (v + 0.05), 1.2 * sqsz, ts * 0.2, sqsz * 0.6);
        rect(ts * (v + 0.35), 1.2 * sqsz, ts * 0.6, sqsz * 0.6);

        rect(ts * v, 2.0 * sqsz, ts * 1.4, sqsz * 0.55);
        rect(ts * v, 2.55 * sqsz, ts * 1.4, sqsz * 0.6);
        rect(ts * v, 3.15 * sqsz, ts * 1.4, sqsz * 0.4);
        rect(ts * v, 3.55 * sqsz, ts * 1.4, sqsz * 0.55);
        rect(ts * v, 4.1 * sqsz, ts * 1.4, sqsz * 0.4);
        rect(ts * (v + 0.4), 4.2 * sqsz, ts * 0.6, sqsz * 0.2);

        fill(50);
        ellipse(ts * (v + 0.7), 3.25 * sqsz, sqsz * 0.8);
        fill(200);
        ellipse(ts * (v + 0.7), 3.25 * sqsz, sqsz * 0.15);
        push();
        fill(0);
        ellipse(ts * (v + 0.7), 0.75 * sqsz, sqsz * 0.5);
        pop();
        makeFlute(v, ts, sqsz, WW);
      }
      pop();
      ///

      verticalsOvals(t, ts, sqsz);
      // stroke(0, random(250), 250);

      lowerLights(sqsz, ts);
      upperLights(sqsz, ts, t);

      ///  GREY BRACe
      push();
      fill(20, 20, 200);
      strokeWeight(sqsz * 0.15);
      stroke(180);
      for (v = 0; v < 8; v++)
        rect(ts * (v * 1.5), 33 * sqsz, t * 1.5 * sqsz, sqsz);

      pop();
      line(ts * 3.5, 34.5 * sqsz, 0, 34.5 * sqsz);
      line(ts * 3.5, 37.5 * sqsz, 0, 37.5 * sqsz);
      line(ts * 3.5, 37.0 * sqsz, 0, 37.0 * sqsz);
      for (v = 0; v < 2; v++)
        rect(ts * (v * 1.5), 34 * sqsz, t * 1.5 * sqsz, 0.5 * sqsz);

      line(ts * 9.5, 34.5 * sqsz, ts * 5.5, 34.5 * sqsz);
      for (v = 4; v < 6; v++)
        rect(ts * (v * 1.5), 34 * sqsz, t * 1.5 * sqsz, 0.5 * sqsz);

      ///////   ARC ABOVE LIGHTS
      push();
      fill(250);
      fill(20, 100, 29);
      noFill();
      strokeCap(SQUARE);
      if (t === 1) {
        arc(7.95 * sqsz, 36.05 * sqsz, 3.1 * sqsz, 3.1 * sqsz, -HALF_PI, 0);
        arc(7.05 * sqsz, 36.05 * sqsz, 3.1 * sqsz, 3.1 * sqsz, PI, -HALF_PI);
        arc(-7.05 * sqsz, 36.05 * sqsz, 3.1 * sqsz, 3.1 * sqsz, -HALF_PI, 0);
        arc(-7.95 * sqsz, 36.05 * sqsz, 3.1 * sqsz, 3.1 * sqsz, PI, -HALF_PI);
      }
      line(5.5 * ts, 34.5 * sqsz, (0.45 + 5.5) * ts, 35.0 * sqsz);
      line(9.5 * ts, 34.5 * sqsz, (9.5 - 0.45) * ts, 35.0 * sqsz);

      pop();
      ///////  OUTER ARC  END

      ///////  OUTER ARC  BEGINNING
      push();
      fill(250);
      rect(11.5 * ts, 45 * sqsz, 0.25 * ts, 4 * sqsz);
      fill(20, 100, 29);
      noFill();
      strokeWeight(sqsz * 0.15);
      strokeCap(SQUARE);
      arc(-15 * sqsz, 48.25 * sqsz, 6.5 * sqsz, 6.5 * sqsz, -HALF_PI, 0);
      arc(15 * sqsz, 48.25 * sqsz, 6.5 * sqsz, 6.5 * sqsz, PI, -HALF_PI);
      line(11.75 * ts, 45 * sqsz, (0.9 + 11.75) * ts, 46 * sqsz);
      line(11.75 * ts, 46 * sqsz, (0.9 + 11.75) * ts, 46 * sqsz);
      line(12.6 * ts, 45 * sqsz, 12.6 * ts, 46 * sqsz);
      line(13.4 * ts, 45 * sqsz, 13.4 * ts, 45.5 * sqsz);
      line(11.75 * ts, 46.75 * sqsz, (0.3 + 11.75) * ts, 46.75 * sqsz);
      pop();
      ///////  OUTER ARC  END

      ///////  RED LINES
      push();
      for (v = 0; v < mmmm; v = v + 2) {
        stroke(50);
        strokeWeight(sqsz * 0.05);
        if (v === 0) stroke(150);
        var pp = 0;
        line(ts * v, sqsz * pp, ts * v, sqsz * (pp + 69));
        text(pp + v, 21 * sqsz, (v + pp) * sqsz);
        line(21 * sqsz, (v + pp) * sqsz, -21 * sqsz, (v + pp) * sqsz);
      }
      pop();
    }
  }
}
function randFill() {
  // fill(random(250), random(250), random(250));
}

function lowerLights(sqsz, ts) {
  var level = 41.5;
  var lvl = [
    level,
    level + 1.2,
    level + 1.5,
    level - 0.15,
    level - 0.35,
    level + 1.55,
    level + 1.5,
    level - 0.45,
    level - 0.5,
    level - 0.29
  ];

  for (m = 8; m > 5; m = m - 2) {
    beginShape();
    curveVertex(m * ts, lvl[0] * sqsz);
    curveVertex(m * ts, lvl[0] * sqsz);
    curveVertex(m * ts, lvl[1] * sqsz);
    curveVertex((m + 0.5) * ts, lvl[6] * sqsz);
    curveVertex((m + 1) * ts, lvl[1] * sqsz);
    curveVertex((m + 1) * ts, lvl[0] * sqsz);
    curveVertex((m + 1) * ts, lvl[0] * sqsz);
    endShape();
    rect((m - 0.1) * ts, lvl[3] * sqsz, 1.2 * ts, 0.15 * sqsz);
    rect((m + 0.1) * ts, lvl[4] * sqsz, 0.8 * ts, 0.15 * sqsz);
    line((m - 0.1) * ts, lvl[4] * sqsz, (m + 1.1) * ts, lvl[4] * sqsz);
    line((m - 0.0) * ts, lvl[7] * sqsz, (m + 1.0) * ts, lvl[7] * sqsz);
    line((m + 0.1) * ts, lvl[8] * sqsz, (m + 0.9) * ts, lvl[8] * sqsz);
    rect((m + 0.1) * ts, lvl[5] * sqsz, 0.8 * ts, 0.4 * sqsz);
  }
}

function upperLights(sqsz, ts, t) {
  // t = 1;
  // var bot = [39.5, 37.5, 39, 37.1, 37.05, 37, 36.95];
  var bot = [38.5, 36, 38, 35.6, 35.5, 35.5, 35.45];
  for (m = 8; m > 5; m = m - 2) {
    triShape([t * 8, t * 0.5], [bot[0], 0.5], sqsz, 0, BridgeHue, false);
    triShape([t * 8.5, t * 0.5], [bot[0], 0.5], sqsz, 0, BridgeHue, false);

    triShape([t * 6, t * 0.5], [bot[0], 0.5], sqsz, 0, BridgeHue, false);
    triShape([t * 6.5, t * 0.5], [bot[0], 0.5], sqsz, 0, BridgeHue, false);

    rect((m + 0.05) * ts, bot[2] * sqsz, 0.9 * ts, 0.5 * sqsz);
    rect((m - 0.1) * ts, bot[1] * sqsz, 1.2 * ts, 2 * sqsz);

    rect((m + 0.1) * ts, bot[3] * sqsz, 0.8 * ts, 0.4 * sqsz);

    line((m - 0.1) * ts, bot[3] * sqsz, (m + 1.1) * ts, bot[3] * sqsz);
    line((m + 0.1) * ts, bot[4] * sqsz, (m + 0.9) * ts, bot[4] * sqsz);
    line((m + 0.2) * ts, bot[5] * sqsz, (m + 0.8) * ts, bot[5] * sqsz);
    line((m + 0.3) * ts, bot[6] * sqsz, (m + 0.7) * ts, bot[6] * sqsz);
  }
}

function verticalsOvals(t, ts, sqsz) {
  push();

  for (m = 0; m < 2; m++) {
    ///// Longer vertical rects with ovals
    fill(120);

    rect(ts * (4 + m * 6), 45 * sqsz, t * sqsz, 5.25 * sqsz);
    fill(20, 20, 200);

    ellipse(ts * (4.5 + m * 6), sqsz * 45.8, 0.5 * sqsz, 0.9 * sqsz);
    ellipse(ts * (4.5 + m * 6), sqsz * 47.0, 0.6 * sqsz, 1 * sqsz);
    ellipse(ts * (4.5 + m * 6), sqsz * 48.2, 0.6 * sqsz, 1 * sqsz);
    ellipse(ts * (4.5 + m * 6), sqsz * 49.4, 0.6 * sqsz, 1 * sqsz);
  }
  pop();
}

function bigArch(j, ts, sqsz) {
  // SUPPORTS for LOWER ARCH IN CENTER
  var m = 1.55;

  line(ts * 3.4, (j + 3.5) * sqsz, ts * (3.5 - m), (j + 3.5 + m) * sqsz);
  line(ts * 1.25, (j + 3.5) * sqsz, ts * 1.25, (j + 4.5) * sqsz);
  line(ts * 3.4, (j + 5.8) * sqsz, ts * 2.7, (j + 5.8) * sqsz);

  // LOWER VERTICAL EDGES OF LOWER CNTER ARCH
  noFill();
  push();
  strokeWeight(sqsz * 0.2);

  line(ts * 3.25, (j + 7.5) * sqsz, 3.25 * ts, (j + 11.5) * sqsz);
  line(ts * 3.4, (j + 3.5) * sqsz, 3.4 * ts, (j + 11.5) * sqsz);
  // line(ts * 3.5, (j + 11.5) * sqsz, 3.25 * ts, (j + 11.5) * sqsz);
  var bbb = j + 4.25;
  var bzr = [bbb, bbb + 0.55, bbb + 3.25];
  bezier(
    0 * sqsz,
    bzr[0] * sqsz,
    3.2 * ts,
    bzr[1] * sqsz,
    3.25 * ts,
    bzr[2] * sqsz,
    3.25 * ts,
    bzr[2] * sqsz
  );
  pop();
}

function makeFlute(v, ts1, sqsz1, WW) {
  push();
  var adj = 0.025;
  var sqsz = sqsz1 * adj;
  var X = [0, 0, 2, 5.5, 12, 29, 40, 38, 30, 0, 0];
  var Y = [0, 0, 10, 28, 40, 43, 40, 53, 54, 50, 50];
  var ta = adj * ts1;

  var mmm = [v + 0.7, -0.5];
  push();
  stroke(0, 200, 0);
  ellipse(ts1 * mmm[0], sqsz * mmm[1], 2);
  ellipse(ts1 * mmm[0], sqsz * 1, 2);
  pop();
  noFill();
  beginShape();
  translate(ts1 * mmm[0], sqsz1 * mmm[1]);
  for (var n = 0; n < X.length; n++)
    curveVertex(ts1 * X[n] * adj, Y[n] * adj * sqsz1);
  for (n = 0; n < X.length; n++) curveVertex(-ta * X[n], Y[n] * sqsz);

  endShape();

  var jj = (pow(0.5, 3) * WW) / 50;
  star(X[7] * ta, Y[7] * sqsz, jj, jj, 4);
  star(X[7] * -ta, Y[7] * sqsz, jj, jj, 4);

  pop();
  var sss = 2 * (v > 5) + (ts1 > 0);
  for (erp = 0; erp < 4; erp++) {
    BridgeHue1[erp] = int(noisyColor2(BridgeHue1[erp]));
  }
  fill(color("hsla(" + BridgeHue1[sss] + ", 83%, 47%, 1)"));

  ellipse(ts1 * (v + 0.7), -0.8 * sqsz1, sqsz1 * 1.5);
}

function teenyArch(j, ts, sqsz, whichArch, WW) {
  push();
  strokeWeight(sqsz * 0.2);
  var X, xx, yy, q, qq, bbb, bX, bY, sc;
  q = [0.75, 1, 5];
  sc = 0.2;
  if (whichArch === 0) {
    X = 11.65;
    xx = [X + 0.05, X + 0.2, X + 0.35, X + 0.55];
    yy = [9.5, 8.5, 7.5, 6.5];
    qq = [X + q[0], X + q[1], 0];
    bbb = 5.15;
    bX = [13.4, 11.8, 11.75];
    bY = [bbb, bbb + 0.55, bbb + 4.25];
  }
  if (whichArch === 1) {
    X = 11.35;
    xx = [X + 0.05, X + 0.42, X + 1.05, X + 0.55];
    yy = [1.5, 2.5, 3.5];
    qq = [X + q[0], X + q[1], 0];
    bbb = 0.15;
    bX = [13.0, 11.4, 11.35];
    bY = [bbb + 3.85, bbb + 2.5, bbb + 1];
    // stroke(240, 0, 0);
  }

  if (whichArch > 1) {
    X = 5.55;
    xx = [X + 0.05, X + 0.42, X + 1.05, X + 0.55];
    yy = [];
    qq = [X + q[0], X + q[1], 0];
    bbb = 0.15;

    if (whichArch === 2) bX = [6.3, 5.5, 5.45];
    if (whichArch === 3) bX = [2.7, 3.5, 3.55];
    if (whichArch === 4) bX = [8.7, 9.5, 9.55];

    bY = [bbb + 2.25, bbb + 1.5, bbb + 1];
    // stroke(240 / whichArch, whichArch * 80, 0);
  }

  if (whichArch === 5) {
    bbb = 61;
    bX = [9, 9.4, 9.5];
    bY = [bbb + 3.5, bbb + 2, bbb + 1];
    sc = WW / 1200 / sqsz;
  }

  for (var z = 0; z < yy.length; z++) {
    line(ts * X, yy[0] * sqsz, ts * xx[0], yy[0] * sqsz);
    line(ts * X, yy[1] * sqsz, ts * xx[1], yy[1] * sqsz);
    line(ts * X, yy[2] * sqsz, ts * xx[2], yy[2] * sqsz);
    line(ts * X, yy[3] * sqsz, ts * xx[3], yy[3] * sqsz);
  }

  if (whichArch === 0) {
    line(ts * X, q[2] * sqsz, ts * qq[0], (j + q[0]) * sqsz);
    line(ts * X, (j + q[1]) * sqsz, ts * qq[0], (j + q[1]) * sqsz);
    line(ts * qq[0], q[2] * sqsz, ts * qq[0], (j + q[1]) * sqsz);
  }
  strokeWeight(sqsz * sc);
  bezier(
    bX[0] * ts,
    bY[0] * sqsz,
    bX[1] * ts,
    bY[1] * sqsz,
    bX[2] * ts,
    bY[2] * sqsz,
    bX[2] * ts,
    bY[2] * sqsz
  );
  if (whichArch === 5) {
    for (z = 0; z < 3; z++) {
      var sh = [-6, -9, -6];
      bX = [bX[0] + sh[z], bX[1] + sh[z], bX[2] + sh[z]];
      bezier(
        bX[0] * ts,
        bY[0] * sqsz,
        bX[1] * ts,
        bY[1] * sqsz,
        bX[2] * ts,
        bY[2] * sqsz,
        bX[2] * ts,
        bY[2] * sqsz
      );
    }
  }

  pop();
}
function verticalLights(sqsz, ts) {
  var L = [6, -0];
  var ttt = [37.5, 43, 37, 44, 51, 55, 59];
  for (k = 0; k < 2; k++) {
    line(ts * (4.3 + L[k]), ttt[2] * sqsz, ts * (4.3 + L[k]), ttt[3] * sqsz);
    line(ts * (4.7 + L[k]), ttt[2] * sqsz, ts * (4.7 + L[k]), ttt[3] * sqsz);
    for (j = 0; j < 2; j++)
      rect(ts * (4.1 + L[k]), ttt[j] * sqsz, ts * 0.8, 0.8 * sqsz);
  }
}

function bottom(ts, sqsz, j, WW) {
  push();
  line(ts * 5.5, (60 + 0.25) * sqsz, ts * 9.5, (j + 0.25) * sqsz);
  line(ts * 5.5, 60.5 * sqsz, ts * 9.5, 60.5 * sqsz);
  triangle(ts * 6.3, 61 * sqsz, ts * 7.3, 61 * sqsz, ts * 6.3, 61.5 * sqsz);
  triangle(ts * 8.7, 61 * sqsz, ts * 7.7, 61 * sqsz, ts * 8.7, 61.5 * sqsz);
  strokeWeight(sqsz * 0.12);
  stroke(250);
  strokeWeight(WW / 1200);

  for (var k = 0; k < 2; k++) {
    // VERTICAL LINES
    var L = 6 * k;
    var m = 62;

    push();
    fill(120);
    rect(ts * (3.8 + L), 64 * sqsz, ts * 1.4, 1.4 * sqsz);
    pop();

    line(ts * (4.0 + L), 62 * sqsz, ts * (4.0 + L), (m + 1.5) * sqsz);
    line(ts * (3.8 + L), 62 * sqsz, ts * (3.8 + L), (m + 2) * sqsz);
    line(ts * (3.5 + L), 62 * sqsz, ts * (3.5 + L), m * sqsz);
    line(ts * (5.0 + L), 62 * sqsz, ts * (5.0 + L), (m + 1.5) * sqsz);
    line(ts * (5.2 + L), 62 * sqsz, ts * (5.2 + L), (m + 2) * sqsz);
    line(ts * (5.5 + L), 62 * sqsz, ts * (5.5 + L), m * sqsz);
    line(ts * (4.0 + L), (m + 1.5) * sqsz, ts * (5.0 + L), (m + 1.5) * sqsz);
    line(ts * (6 + L), 64.5 * sqsz, ts * (6 + L), (m + 3.5) * sqsz);
    line(ts * (3 + L), 64.5 * sqsz, ts * (3 + L), (m + 3.5) * sqsz);
    rect(ts * (6.5 + L), 65.5 * sqsz, ts * -4, 0.16 * sqsz);
    rect(ts * (7 + L), 66.9 * sqsz, ts * -5, 0.16 * sqsz);

    beginShape();
    curveVertex(ts * (6.5 + L), 65.7 * sqsz);
    curveVertex(ts * (6.5 + L), 65.7 * sqsz);
    curveVertex(ts * (6.2 + L), 66 * sqsz);
    curveVertex(ts * (7.2 + L), 66.7 * sqsz);
    curveVertex(ts * (7 + L), 66.9 * sqsz);
    curveVertex(ts * (7 + L), 66.9 * sqsz);
    endShape();

    beginShape();
    curveVertex(ts * (2.6 + L), 65.7 * sqsz);
    curveVertex(ts * (2.6 + L), 65.7 * sqsz);
    curveVertex(ts * (2.9 + L), 66 * sqsz);
    curveVertex(ts * (1.9 + L), 66.7 * sqsz);
    curveVertex(ts * (2.1 + L), 66.9 * sqsz);
    curveVertex(ts * (2.1 + L), 66.9 * sqsz);
    endShape();
  }
  line(ts * (0 + L), 62.1 * sqsz, ts * (0 + L), (m + 3.5) * sqsz);
  line(ts * (3 + L), 62.1 * sqsz, ts * (3 + L), (m + 3.5) * sqsz);
  line(ts * (3 + L), 62.1 * sqsz, ts * (1.5 + L), (m - 0.5) * sqsz);
  line(ts * (0 + L), 62.1 * sqsz, ts * (1.5 + L), (m - 0.5) * sqsz);

  var ang = (millis() % 2000) * ((2 * PI) / 2000);
  var L8 = L + 8;
  if (k === 2) {
    rect(ts * (8 + L), 67.1 * sqsz, ts * -28, 0.16 * sqsz);
    line(ts * (8 + L), 67.1 * sqsz, ts * (8.5 + L), 68.1 * sqsz);
    line(ts * (8.5 + L), 68.1 * sqsz, ts * (-20.5 + L), 68.1 * sqsz);
    line(ts * (8.5 + L), 68.1 * sqsz, ts * (8.0 + L), 69.1 * sqsz);
    line(ts * (8.0 + L), 69.1 * sqsz, ts * (-14 + L), 69.1 * sqsz);
    line(sqsz * L8, 69.1 * sqsz, sqsz * L8, (71 + 0.5 * sin(ang)) * sqsz);
    line(-sqsz * L8, 69.1 * sqsz, -sqsz * L8, (71 + 0.5 * cos(ang)) * sqsz);
  }
  pop();
}
function triShape(xxx, yyy, sqsz, back, MMM, tfcolor) {
  var X = [xxx[0] * sqsz, xxx[1] * sqsz];
  var Y = [yyy[0] * sqsz, yyy[1] * sqsz];

  triangle(X[0], Y[0], X[0], Y[0] + Y[1], X[0] + X[1], Y[0] + Y[1]);
  triangle(X[0], Y[0] + Y[1], X[0], Y[0], X[0] + X[1], Y[0]);
  line(X[0] + X[1], Y[0], X[0] + X[1], Y[0] + Y[1]);
  var dX = [
    X[0] + X[1] / 20,
    X[0] + X[1] - X[1] / 20,
    X[0] + X[1] * 0.5,
    X[0] + X[1] * 0.45,
    X[0] + X[1] * 0.55,
    X[0] + X[1]
  ];
  var dY = [
    Y[0] + Y[1] / 20,
    Y[0] + Y[1] - Y[1] / 20,
    Y[0] + Y[1] * 0.5,
    Y[0] + Y[1] * 0.45,
    Y[0] + Y[1] * 0.55,
    Y[0] + Y[1]
  ];
  if (back === 1) {
    push();
    strokeWeight(sqsz * 0.15);
    stroke(180);
    line(dX[2], dY[0], dX[0], dY[2]);
    line(dX[2], dY[5], dX[0], dY[2]);
    line(dX[2], dY[5], dX[5], dY[2]);
    line(dX[2], dY[0], dX[5], dY[2]);
    line(dX[2], dY[0], dX[2], dY[5]);
    line(dX[0], dY[2], dX[5], dY[2]);
    pop();
  }
  push();

  for (var p = 0; p < 4; p++) {
    if (tfcolor) MMM[p] = int(noisyColor2(MMM[p]));
  }
  if (back !== 1) fill(color("hsla(" + MMM[0] + ", 83%, 47%, 1)"));
  triangle(dX[0], Y[0], dX[1], Y[0], dX[2], dY[3]);

  if (back !== 1) fill(color("hsla(" + MMM[1] + ", 83%, 47%, 1)"));
  triangle(dX[0], Y[0] + Y[1], dX[1], Y[0] + Y[1], dX[2], dY[4]);

  if (back !== 1) fill(color("hsla(" + MMM[2] + ", 83%, 47%, 1)"));
  triangle(X[0], dY[0], X[0], dY[1], dX[3], dY[2]);

  if (back !== 1) fill(color("hsla(" + MMM[3] + ", 83%, 47%, 1)"));
  triangle(X[0] + X[1], dY[0], X[0] + X[1], dY[1], dX[4], dY[2]);

  pop();
}
