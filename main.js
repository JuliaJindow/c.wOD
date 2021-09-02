var img = "";
var status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,400);
    canvas.center();
    ObjectD = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("The model is loaded!!");
    status = true;
    ObjectD.detect(img, gotResult);
}

function gotResult(error, results){
if (results){
console.log(results);
}
else{
console.error(error);
}
}
function draw() {
    image(img,0,0,640,400);
    fill("#ff0000");
    text("Dog",40,70);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);

    fill("#fff700");
    text("Cat",320,120);
    noFill();
    stroke("#fff700");
    rect(300,90,270,320);
}