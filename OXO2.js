/* eslint-disable no-undef, no-unused, no-unused-vars */

class OXOsign {
  constructor() {
    this.step = 0;
    this.whirlFlag = 0;
    this.Xcolor = [[]];
    var t = 255;
    for (var i = 0; i < 5; i++) {
      var temp = [30, i * 4, i * 3, random(t), random(t), random(t), random(t)];
      this.Xcolor[i] = temp;
    }
    this.AcolorX = [];
    for (i = 0; i < 9; i++) this.AcolorX[i] = random(255);
  }

  render(signTime) {
    if (SwitchSign) this.step = 0;
    this.step = this.step + 1;
    this.EyeGherkin = int(this.step / 200) % 2;
    this.AngleMan = this.step % 180;
    this.eyeRotate = this.step % 360;
    this.innerCir = windowWidth / 12;

    this.AngleMan = this.step % 90;
    if (random() > 0.9) this.whirlFlag = random(100);
    var bW = windowWidth + windowWidth / 4; // BANDWIDTH
    var mW = bW / 200;
    var GherkinX = bW - mW * (this.step % 200) - windowWidth / 4;
    // this.EyeGherkin = 0;
    background(0);
    if (this.EyeGherkin === 1) createGherkin(GherkinX);
    if (this.EyeGherkin === 0)
      createTheEye(GherkinX, radians(-this.eyeRotate), this.whirlFlag);

    createOXO(this.Xcolor, this.AcolorX, signTime);
  }
}
