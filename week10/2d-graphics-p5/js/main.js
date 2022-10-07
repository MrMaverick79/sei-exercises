console.log('Loaded', dat, p5);

// // SCREENSAVER MODE //
// //P5 requires a function ot be set up in this way.
// //The drawing needs to be within the setup
const circles = []; //for storing all the drawn circles, so we can redraw them and move them around

const controls = {
    velocityScale: 1.0
}

function  setup(){
    //TODO: add a chack box to the dat.gui controls so that you can conditionally enable or diable controls
    //TODO: Press space to clear the screen--i.e. empty the circles array
    //TODO:
        //1. Draw a line form the current circle to every other circle?
        // 2. Draw line between circles that are "close enough"
        // 3. Look up Pythogoras' distance formula to calc the x, y distances
        // it will allow us to calc the distance (d) sqr(w^2 + h^2)

    //create a control panel using DAT.gui
    const gui = new dat.GUI();
    gui.add( controls, 'velocityScale', -2.0, 2.0)

    createCanvas(windowWidth, windowHeight);
    background (0 );
     // can use 1 value (greyscale)
    //or as RGB    background( 55)
    colorMode(HSB, 255)

    //Draw a circle:
    // fill (255, 0, 100);
    // // strokeWeight(10)
    // // stroke(0, 0, 255)
    // // noStroke()
    // //        x   y  w    h
    // ellipse (200, 300, 100, 100);
    
   
        
    //rect
    // fill (0, 255, 0),
    

    // rect(200, 300, 150, 150);

    // //Triangle
    // fill(0, 255, 0);
    // triangle(
    //     400, 100,  //POSTION of pt 1
    //     650, 300,
    //     400, 300


    // )

}

// function draw(){
    
//     fill (
//         random(256), //hue
//         255, //saturation
//         255, //brightness
//         127 //opacity ("alpha channel   ")
//     );

//     noStroke();

//     ellipse(
//         random(windowWidth), //x
//         random(windowHeight), // y
        
//         random(200) //width and height
//     )

// }


// *Painter Mode*

function draw(){

    if(keyIsDown(SHIFT) ) {


        // const hue =map( //not the same as ES6 map
        //     mouseX, //inputValue
        //     0, windowWidth, //input range 
        //     0, 255 //output range

        // );

        const hue = frameCount % 255;
        const size =150; 

        const newCircle ={
            xPos: mouseX,
            yPos: mouseY,
            hue: hue,
            size: size,
            xVel: random(-20, 20),
            yVel: random(-20, 20)
        }

        circles.push(newCircle)

        // noStroke();
        // fill(
        //     hue, 
        //     // mouseX / windowWidth * 255, // a version that normalize the range across the screen
        //      255,
        //     255);
        // ellipse(mouseX, mouseY, 100, 100)
        
    }

    updateCircles();

    
    
} //draw

function updateCircles(){
    console.log('bEING CALLED');

    background(0);
    for (const circle of circles){
        
        //update the position of the circle
        //using velocity
        
        circle.xPos += circle.xVel * controls.velocityScale;
        circle.yPos += circle.yVel * controls.velocityScale;

        //Check whether it has hit anm edged
        if (circle.xPos > windowWidth || circle.xPos < 0) {
            circle.xVel *= -1; //flip the direction

        }

        if (circle.yPos > windowHeight || circle.yPos < 0) {
            circle.yVel *= -1; //flip the direction
            
        }

        fill( circle.hue, 255, 255);
        ellipse(circle.xPos, circle.yPos, circle.size, circle.size)
    }

};