


function setup(){ 
    canvas= createCanvas(500,500);
    canvas.center();

    canvas.mouseReleased(identifySketch)
}

function draw(){
    fill("black")
    strokeWeight(20)

    if(mouseIsPressed){
        line(pmouseX , pmouseY ,mouseX , mouseY)
    }
}

function clearcanvas(){
    background("white");
}

function preload(){
    model = ml5.imageClassifier("DoodleNet" , modelLoaded)
}

function modelLoaded(){
    console.log("Model has loaded")
}

function identifySketch(){
    model.classify(canvas , showResult)
}

function showResult(error , result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        answer = result[0].label;
        document.getElementById("sketch").innerHTML = "Sketch: " + result[0].label;
        document.getElementById("confidence").innerHTML = "Confidence: " + result[0].confidence;
    }
}

sketches = ["apple" , "cake" ,"door" , "candle" , "matches" , "chair" , "bed" ,"clock","square", "hexagon" ,"butterfly", "camera" , "calculator","book","map","car","cat","cell phone","circle" , "diamond" ,"coffee cup" ,"cookie", "crown","eye" ,"fish" ,"flower" , "hat" , "ice cream" ,"house","line","purse","envelope"]
rn = Math.floor(Math.random() * 34)
sketch = sketches[rn];
window.alert("You need to draw a/an " + sketch )

function check(){
    if(answer == sketch){
        window.alert("Great Job!")
        clearcanvas(); 
        rn = Math.floor(Math.random() * 34)
        sketch = sketches[rn];
        window.alert("You need to draw a/an " + sketch )
    }
    else{
        clearcanvas();
        window.alert("Try again")
    }
}

timer = 0;
function start(){
    setInterval(function(){
        if(timer < 60){
            timer = timer + 1;
            document.getElementById("timer").innerHTML = timer;

        }
        else{
            clearcanvas()
            window.alert("Time is up , try again")
        }
    },1000)
}