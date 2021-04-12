/* eslint-disable no-undef, no-unused, no-unused-vars */
class SchweppesSign {
  // Constructor Function for the class CitgoSign
  constructor() {
    this.step = 0;
    this.step = 250;
    this.TurnMode = 99;
    this.ConstColorIndex = 0;
  }
  render(signTime) {
    this.step = this.step + 1;
    if (SwitchSign) this.step = 0;

    const NumBands = 13;
    const NumColors = 6;
    const NumStripes = 8;
    var LineN = NumBands * NumStripes;

    var BaseLineLen = round(windowHeight * 0.9, 0);
    var SingleLineWidth = BaseLineLen / 88;
    var MidX = windowWidth / 2;
    var MidY = windowHeight / 2;
    var Xstart = MidX - (LineN / 2) * SingleLineWidth;

    var CycleStep = this.step % (3 * LineN);
    var Interim123 = int((CycleStep - 1) / LineN);
    var The25 = int(CycleStep / (2.5 * LineN));
    var Mode = Interim123 + The25;
    if (CycleStep === 260) Mode = 2;
    if (CycleStep === 0) {
      this.TurnMode = 99;
      if (random() > 0.05) {
        this.TurnMode = 1;
        this.ConstColorIndex = int(random() * schweppesLetterColors.length);
      }
    }

    var ModeStep = 1 + ((CycleStep - 1) % LineN);

    strokeWeight(5);
    textSize(25);
    var lineV = 0;
    var printLineLen = 0;
    const RandomLetterColorIndex = Math.floor(Math.random() * 7);

    for (var j = 0; j < NumBands; j++) {
      var CurrentColor = j % NumColors;
      var GreyStroke = 30 + 12 * CurrentColor;
      var ColrStroke = this.RGBx(CurrentColor);

      Flicker = !Flicker;
      if (Flicker) {
        ColrStroke[0] = ColrStroke[0] + 8;
        ColrStroke[1] = ColrStroke[1] + 8;
        ColrStroke[2] = ColrStroke[2] + 8;
      }

      var time2color = int(
        (LineN * ((signTime[1] % 5) + signTime[2] / 60)) / 5
      );

      for (var k = 0; k < NumStripes; k++) {
        lineV = j * NumStripes + k;
        this.printDiagnostics(false, CycleStep, Mode, ModeStep, this.TurnMode);
        stroke(
          this.getModeStroke(GreyStroke, lineV, ModeStep, Mode, ColrStroke)
        );
        // stroke(baseStroke);

        //////////////////////////////////////////////////
        printLineLen = (BaseLineLen * this.curveLineLen(lineV)) / 2;
        var Ytop = MidY - printLineLen;
        var Ybot = MidY + printLineLen;
        var VertAxis = Xstart + SingleLineWidth * lineV;
        line(VertAxis, Ytop, VertAxis, Ybot);
        push();
        if (lineV === time2color) {
          stroke(
            this.getModeStroke(ColrStroke, lineV, ModeStep, Mode, GreyStroke)
          );
          line(VertAxis, Ybot - printLineLen / 10, VertAxis, Ybot);
        }
        pop();
      }
    }

    const imageX =
      +MidX - 0.7 * SingleLineWidth - (LineN * SingleLineWidth) / 2;
    const imageY = 0.3 * (MidY / 2);
    const imageWX = LineN * SingleLineWidth;
    const imageWY = (3.2 * MidY) / 2;
    image(SchweppesbackgroundImage, imageX, imageY, imageWX, imageWY);

    if (Mode < 3 && this.TurnMode !== 1) {
      for (let i = 0; i < letterImagesWhite.length; i++)
        image(letterImagesWhite[i], imageX, imageY, imageWX, imageWY);
    }
    if (this.TurnMode === 1) {
      for (let i = 0; i < letterImagesWhite.length; i++) {
        image(
          letterImagesWithColor[i][this.ConstColorIndex],
          imageX,
          imageY,
          imageWX,
          imageWY
        );
      }
    }
    if (Mode === 3) {
      for (let i = 0; i < letterImagesWithColor.length; i++) {
        image(
          letterImagesWithColor[i][
            Math.floor(Math.random() * letterImagesWithColor[i].length)
          ],
          imageX,
          imageY,
          imageWX,
          imageWY
        );
      }
    }
  }

  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////

  getModeStroke(GreyStroke, lineV, ModeStep, Mode, ColrStroke) {
    if (Mode === 0 || Mode === 2) if (lineV < ModeStep) return ColrStroke;
    if (Mode === 1 || Mode === 2) if (103 - lineV < ModeStep) return ColrStroke;
    if (Mode === 3) return ColrStroke;
    return GreyStroke;
  }

  curveLineLen(s) {
    var nLL = abs(s - 53.0) / PI;
    var newLineLen = nLL / 52.0;
    return cos(newLineLen);
  }

  printDiagnostics(TF, CycleStep, Mode, ModeStep, TM) {
    if (TF) {
      stroke(250, 0, 0);
      text("This.Step: " + this.step, 30, 50);
      text("CycleStep: " + CycleStep, 30, 100);
      text("Mode: " + Mode, 30, 150);
      text("Mode Step: " + ModeStep, 30, 200);
      text("TurnMode: " + TM, 30, 250);
    }
  }

  RGBx(Xmod) {
    if (Xmod === 0 || Xmod === 6 || Xmod === 12) return [235, 52, 204];
    if (Xmod === 1 || Xmod === 7) return [52, 52, 235];
    if (Xmod === 2 || Xmod === 8) return [0, 166, 255];
    if (Xmod === 3 || Xmod === 9) return [201, 65, 34];
    if (Xmod === 4 || Xmod === 10) return [237, 227, 225];
    if (Xmod === 5 || Xmod === 11) return [78, 250, 5];
    // return dVals; // Returns an array of 3 ints: 20, 40, 60
  }
}
