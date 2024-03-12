status=""

function preload(){
    img = loadImage("bedroom_img.jpg");
   }
   
   function setup(){
       canvas = createCanvas(640,420);
       canvas.center();

       objectDetector = ml5.objectDetector("cocossd", modelloaded);
       document.getElementById("status").innerHTML = "Status : Detecting Objects";
   }

   function modelloaded(){
    console.log("modelloaded");
    status=true;
    objectDetector.detect(img, gotResults);
   }

   function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
    }
   }

   
   function draw(){
       image(img, 0, 0, 640, 420);
   }