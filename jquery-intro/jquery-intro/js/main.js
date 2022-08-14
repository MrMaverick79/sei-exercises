//testing JQuery

console.log('Mic check 1 2 1 2')

// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
// Iterate through the array. In each iteration of the loop:

// Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)

const $allRef = $('a')
$allRef.each (function () {
    const url = $(this).attr('href');
    const newImg = youtube.generateThumbnailUrl(url);
    $('<img>').attr('src', newImg).appendTo(this);
});




// const $allParas = $( "p"); //grabs all p
// console.log($allParas) 

// $allParas.html("Whhhaaaaaa?") //changes all p

// $allParas.css("color", "red").html('This is chanined!').fadeOut(3000) //sets css, html, and then fades out

// const $h3 = $("<p>This a new element</p>");
// $h3.addClass("special");
// $("body").append($h3);


// $allParas.fadeIn(5000);
// $allParas.css({
//     backgroundColor : 'yellow',
//     border: '10px solid blue',
//     fontSize: '16pt',
//     'font-family': "Comic Sans MS"

// })

// const $img = $('<img src="http://www.fillmurray.com/200/300">')
// $img.attr({
//     class: 'cat',
//     alt: 'a sad cat'

// });

// $("p").eq(0).append($img);

// //you can just do this in one chain:
// $('<img>') 
//     .attr({
//         class: 'cat',
//         alt: 'a sad cat',
//         src: "http://www.fillmurray.com/200/300",

//     })
//     .css({ 
//         width: '100px',

//     }).appendTo('body')


//     //eachloop

//     $('li').each(function() {
//         console.log($(this).html()); 
    
//     })