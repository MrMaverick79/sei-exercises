console.log('Mic check');
const grabInput = $('#textInput')

//====keyboard events=====//

grabInput.on('keypress', function(e) {
    console.log('You are typing');
    console.log(e);
    
})

grabInput.on('keydown', function() {
    console.log('A key is down');
    
})

grabInput.on('keyup', function() {
    console.log('A key has been raised');
    
})

$('h1').on('focus', function (){
    console.log('focus fires when you move into / on a form element.');
    
})


//========Mouse Events=======//

const $toggle =  $('#toggle');
const $toggleImg = $('#features img');
console.log($toggleImg);

function randomColor() {
    return Math.floor(Math.random()* 256);

};

//mouseover
$(document).on("mousemove", function() {
    console.log('mouse is moving');
    $('#welcome').css('color', `rgb(${randomColor()}, ${randomColor()},${randomColor()})`)   

});

//click
let display = true;
$('#toggle').on('click', function(){
    console.log('clicked');
    
    $('.triple-kitty1').toggle();
});


//mousedown
let hidden = true;
$('#show h2').on('mousedown', function(){
    if(hidden){
        $('#hidden').show();
        hidden = false;
    }
    else {
        $('#hidden').hide();
        hidden = true;
    }
});

//mouseup
let visible = true;
$('#fade').on('mouseup', function(){
    console.log('fader on');
    
    if(visible){
        $('#faded').fadeOut();
        visible = false;
    }
    else {
        $('#faded').fadeIn();
        visible = true;
    }
});



//========Form events=========//



grabInput.on('change', function (){
    console.log('change fires when you change the contents?? of  a form element.');
    
})

grabInput.on('focus', function (){
    console.log('focus fires when you move into / on a form element.');
    
})

grabInput.on('blur', function (){
    console.log('blur fires when you move away from a form element.');
    
})
