/* eslint-disable no-undef, no-unused, no-unused-vars */
let cs; // CITGO
let hf; // HERCULES
let wps; // WALLAUER
let bcs; // BOND
let pcs; // SCHWEPPES
let mts; // MARTINI
let xcs; // OXO
let sfs; // STAR FERRY
let dss; // DIM SUM
let hhs; // HIHO
let hcs; // HELMS
let phs; // PADRE
let bws; // BEST WESTERN
let tpx; // TEST PATTERN
let tcx; // TUCSON CACTUS
let mbx; // MANHATTAN BRIDGE

let SwitchSign;
console.log("Line number 12");
const backgroundImageURL = "images/background.png";
const letterURLs = [
  "images/letter-00-s.png",
  "images/letter-01-c.png",
  "images/letter-02-h.png",
  "images/letter-03-w.png",
  "images/letter-04-e.png",
  "images/letter-05-p.png",
  "images/letter-06-p.png",
  "images/letter-07-e.png",
  "images/letter-08-s.png"
];

let wpNumberone;
let LittleHelms;
let SpeckledBack;
var HelmsSpeckleImages = [];
var BigHelm;
let BWtext;

var HelmsLetterImages = new Array(6);

var BridgeColors = new Array(6);
let BridgeHue = [240, 240, 240, 240];
let BridgeHue1 = [5, 60, 200, 300];
let BridgeHue2 = [5, 60, 200, 300];
let BridgeHue3 = [5, 60, 200, 300];
let BridgeHue4 = [5, 60, 200, 300];
let BridgeHue5 = [5, 60, 200, 300];
let BridgeHue6 = [5, 60, 200, 300];

// var HelmsLetterImages0 = [];
// var HelmsLetterImages1 = [];
// var HelmsLetterImages2 = [];
// var HelmsLetterImages3 = [];
// var HelmsLetterImages4 = [];
// var HelmsLetterImages5 = [];

var PreviousSign;
var NewSign = true;
let schweppesLetterColors;
let letterImagesWhite = [];
let letterImagesWithColor = [];
let SchweppesbackgroundImage;
let WeatherJsons = [];
let WeatherStrings = [];
let NeonPreload;
var Flicker = true;
var weatherWWWstart = "https://api.openweathermap.org/data/2.5/weather?q=";
var weatherWWWfinish =
  "&mode=json&units=Imperial&cnt=7&appid=82c1267972094d5c1801e60fea29992c";

const WeatherInterval = 2000;

const BoxCombos = [
  [0, 2, 10, 9, 0],
  [1, 6, 11, 2, 1],
  [11, 7, 3, 5, 11],
  [10, 5, 4, 8, 10],
  [2, 11, 5, 10, 2]
];
const helmLittleURL = "images/HelmsF.png";

let HelmsSlogans = [];

HelmsSlogans[0] = [" CHOICE OF OLYMPIC CHAMPIONS  ", 1, [252, 50, 2]];
HelmsSlogans[1] = ["    OLYMPIC GAMES BAKERS      ", 0, [2, 200, 220]];
HelmsSlogans[2] = ["OLYMPIC BREAD", 2, [3, 207, 252]];
HelmsSlogans[3] = ["       WORLD CHAMPION         ", 0, [252, 50, 2]];
HelmsSlogans[4] = ["DAILY AT YOUR DOOR", 2, [253, 48, 3]];

const wpNumber1 = "images/WPnumLet3.png";

function preload() {
  LittleHelms = loadImage(helmLittleURL);
  wpNumberone = loadImage(wpNumber1);
  BWtext = loadImage("images/BWorangeLetters.png");
  const WeatherLocations = [
    "London",
    "Los Angeles",
    "New York",
    "Boston",
    "Madrid",
    "Florence",
    "Hong Kong",
    "Melbourne"
  ];

  // letterImagesWithColor is an array of length 9.  Each of those 9 items are arrays of length 8.
  // the 8 items are the same letter in different color

  SchweppesbackgroundImage = loadImage(backgroundImageURL);
  //////////////////////////////////////////////////////////////////
  // WeatherJsons = [];
  if (true) {
    WeatherStrings = WeatherLocations.map(
      (location) => weatherWWWstart + location + weatherWWWfinish
    );
    ////////////////////////////////////////////////////////////
    // const mapFunction = weatherString => loadJSON(weatherString);
    // Above is equivalent to below
    // function mapFunctionOld(weatherString) {
    //   return loadJSON(weatherString);
    // }
    // WeatherJsons = WeatherStrings.map(mapFunction);
    WeatherJsons = WeatherStrings.map((weatherString) =>
      loadJSON(weatherString)
    );
  }
  letterImagesWhite = letterURLs.map((url) => loadImage(url));
  screenBackground();
}

function setup() {
  SpeckledBack = createHelmsSpeckle();
  for (var i = 0; i < 6; i++) HelmsLetterImages[i] = [];
  var tempImg = createImage(5, 5);
  for (var m = 0; m < 6; m++) {
    for (var c = 0; c < 30; c++) {
      HelmsLetterImages[c] = [];
      HelmsLetterImages[m][c] = tempImg;
    }
  }

  CreateHelmLetter(HelmsSlogans);

  canvas = createCanvas(windowWidth, windowHeight); //size(1200,800);(578, 340)
  canvas.drawingContext.miterLimit = 2;
  // window.setTimeout(updateWeather0, WeatherInterval);

  // Create a walker object
  wps = new WallauerSign();
  cs = new CitgoSign();
  hf = new HerculesFloor();
  bcs = new BondSign();
  pcs = new SchweppesSign();
  mts = new MartiniSign();
  xcs = new OXOsign();
  sfs = new StarFerrySign();
  dss = new DimSumSign();
  hhs = new HiHoSign();
  hcs = new BakerySign();
  phs = new PadreSign();
  bws = new CrownSign();
  tps = new TestPattern();
  tcx = new TusconCactus();
  mbx = new ManhattanBridge();

  window.redirectFired = false;

  schweppesLetterColors = [
    color("rebeccapurple"),
    color("blue"), // color("pink"),
    color("green"), // color("DarkGoldenRod"),
    color("DarkMagenta"), // color("hotpink"),
    color("orchid"), // color("slategray"),
    color("moccasin"), // color("navajowhite"),
    color("navy"), // color("olive"),
    color("teal"), // color("springgreen"),
    color("turquoise") // color("lime"),
  ];

  // letterImagesWithColor = letterImagesWhite.map(whiteImage => {
  //   const colorVariationsOfIndividualLetter = new Array(
  //     schweppesLetterColors.length
  //   );
  //   colorVariationsOfIndividualLetter.fill(whiteImage.get());
  //   return colorVariationsOfIndividualLetter.map(
  //     (whiteImageColorWorkingCopy, i) => {
  //       const buffer = createGraphics(1000, 797);
  //       buffer.tint(schweppesLetterColors[i]);
  //       buffer.image(whiteImageColorWorkingCopy, 0, 0);
  //       return buffer;
  //     }
  //   );
  // });

  for (
    let letterIndex = 0;
    letterIndex < letterImagesWhite.length;
    letterIndex += 1
  ) {
    const colorVariationsOfIndividualLetter = new Array(
      schweppesLetterColors.length
    );
    colorVariationsOfIndividualLetter.fill(
      letterImagesWhite[letterIndex].get()
    );
    for (
      let colorIndex = 0;
      colorIndex < schweppesLetterColors.length;
      colorIndex += 1
    ) {
      const whiteImageColorWorkingCopy =
        colorVariationsOfIndividualLetter[colorIndex];
      const buffer = createGraphics(1000, 797);
      buffer.tint(schweppesLetterColors[colorIndex]);
      buffer.image(whiteImageColorWorkingCopy, 0, 0);
      colorVariationsOfIndividualLetter[colorIndex] = buffer;
    }
    letterImagesWithColor[letterIndex] = colorVariationsOfIndividualLetter;
  }
  //push();
}

function draw() {
  var numSigns = 12;
  var demo = 5 === 5 * 2;
  var neonTime = 300; //// DEFAULT VALUE IS 300 I.E. 5 MINUTES
  if (demo) neonTime = 10;
  var signTime = [hour(), minute(), second(), 60, neonTime];
  // signTime[1] = minute() % 5;
  var Hsecs = signTime[1] * 60 + signTime[2];
  var W1 = int(Hsecs / signTime[4]); // signTime 4 =  number of seconds to show each sign
  var M1 = Hsecs / (signTime[4] / 5);
  var M2 = 60 * (M1 - int(M1));
  if (demo) {
    signTime[1] = 45 + (int(M1) % 5);
    signTime[2] = M2;
  }
  WhichSign = W1 % numSigns;
  //pop();
  //push();
  //scale(0.75);
  //translate(50, 100);
  SwitchSign = WhichSign !== PreviousSign;
  if (SwitchSign) NewSign = true;
  PreviousSign = WhichSign;

  clear();
  background(5, 5, 5);
  frameRate(11);
  // WhichSign = 0;
  // scale = 0.75;
  // signTime[1] = 45 + (int(M1) % 5);
  // console.log("ST: ", signTime);
  // console.log(window.redirectFired);
  if (signTime[1] === 5) window.redirectFired = false;
  every3Hours = 4 === signTime[0] % 12 && signTime[1] === 57;
  if (every3Hours && signTime[2] < 3) WhichSign = 30;

  if (signTime[0] % 12 === 5 && signTime[1] === 17) WhichSign = 17;
  if (signTime[0] % 12 === 3 && signTime[1] === 5) WhichSign = 21;
  if (signTime[0] % 12 === 9 && signTime[1] === 18) WhichSign = 22;

  // WhichSign = 22;

  if (WhichSign === 1) {
    cs.increment();
    cs.render(signTime); //CITGO
  }
  if (WhichSign === 2) bcs.render(signTime); //BOND
  if (WhichSign === 3) pcs.render(signTime); //SCHWEPPES
  if (WhichSign === 5) xcs.render(signTime); // OXO
  if (WhichSign === 9) phs.render(signTime); // PADRE
  if (WhichSign === 6) dss.render(signTime); // DIM SUM
  if (WhichSign === 10) bws.render(signTime); //  BEST WESTERN
  if (WhichSign === 11) tps.render(signTime); // TEST PATTERN
  if (WhichSign === 17) hf.render(signTime); // HERCULES
  if (WhichSign === 21) tcx.render(signTime); // TUSCON CACTUS
  if (WhichSign === 22) mbx.render(signTime); // MANHATTAN BRIDGE
  frameRate(2);
  if (WhichSign === 4) mts.render(signTime); // MARTINI
  if (WhichSign === 7) hhs.render(signTime); // HIHO
  if (WhichSign === 8) hcs.render(signTime); // HELMS
  frameRate(5);
  if (WhichSign === 0) wps.render(signTime); // WALLAUER

  if (WhichSign > 28 && !window.redirectFired) {
    console.log(WhichSign, signTime);
    window.redirectFired = true;
    document.location = "https://q4v86.csb.app/";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function AsyncWeather0(www) {
  Wjson = www;
}

const updateWeather0 = () => {
  loadJSON(weatherWWWstart + "London" + weatherWWWfinish, AsyncWeather0);
  window.setTimeout(updateWeather0, WeatherInterval);
};

function screenBackground() {
  img = createImage(windowWidth, windowHeight);
  img.loadPixels();
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let a = map(y, 0, img.height, 255, 0);
      img.set(x, y, [0, 153, 204, a]);
    }
  }
  img.updatePixels();
  NeonPreload = img;
}

function noisyColor(currentValue) {
  var moveSize = 50;
  var cV1 = 5 + currentValue - moveSize / 2 + random(moveSize);
  return (355 + cV1) % 355;
}
function noisyColor2(currentValue) {
  // var ppp = random(5) - 2.5;
  var cV1 = currentValue - 1 + random(5);
  return (359 + cV1) % 359;
}
