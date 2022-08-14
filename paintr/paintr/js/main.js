console.log('Mic check');

//1. when the user moved the mouse around

//mousemove
let mouseXSpeed;
let lastMouseX;
const mousePosition  = 0;

const randomRgbChoice = () => {
   return Math.floor(Math.random()* 256);
} //end randomChoice

const randomRgbColor = () => {
    return `rgb(${randomRgbChoice()}, ${randomRgbChoice()}, ${randomRgbChoice()})`
}; //end randomColor

let drawCount  = 0;

//circle is proportional to mouse movement



const drawCircle = function (x, y) {

    const mouseXSpeed  = x - lastMouseX;
    console.log(mouseXSpeed);
    

    // const circleSize = Math.abs(mouseXSpeed * 5);
    const circleSize = 30;
    const $circle = $('<div>').css({
            class : 'circle',
            position: 'absolute',
            height: `${circleSize}px`,
            width: `${circleSize}px`,
            backgroundColor:`hsla(${drawCount}, 100%, 50%, 0.8)`,
            borderRadius: `${circleSize}px`,
            opacity: 0.7, 
            top: `${y -(circleSize/2)}px`,
            left: `${x -(circleSize/2)}px`,
        
    }); //end css

    drawCount++
    
    
    $(document.body).append($circle)

    $circle.animate({
        opacity: 0, 
        top: `${circleSize}px`
    }, 2000, function(){
        $(this).remove()
    })
}


$(document).on("mousemove", function(e) {
   

    const xPos = e.originalEvent.clientX;
    const yPos = e.originalEvent.clientY;
    if(e.originalEvent.shiftKey){ //only draw a circle if the shift key is held down
        
        drawCircle(xPos, yPos);
        lastMouseX = xPos;
        

    }
   
    //circle code waz ere               

}); // end mouseMOv



//========Control Panel=========//
$('.openPanel').mouseover(function (){
    $('.toolBarOuter').animate({
        left: -10,
    }, 1000)

    $('p').animate({
        rotate: '180deg',
        left: '90%',
    }, 1000)
})