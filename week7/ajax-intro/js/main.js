/*



    Web 2.0 - the modern Web era. 

    Single Page Apps: Instead of rendering apps on the server and sending to the browser to be reloaded aech time we navigate to a new page, or perform an action such as liking a post, we want to load a base HTML page once and use JS to load data in the background from a remote servet, and then to manipulate the DOM to dende this data into the browser.

    For this to work, we need our servers to send us back not a full HTML page, but rather a piece of data  ("raw") --usually JSON (short for JavaScript Object Votation") 

    API: Application Programming Interface

    - These can be either:
        - A set of methods provided by a library to access its features(ActiveRecord has .create, .destroy etc; Jquery has $(), $().css etc) OR

        - A remote data source (Numbers API (numbersapi.com)). These generally return raw data (as opposed to HTML), usually in JSON format



*/

console.log('Mic check');

//We want to mkae an Ajax request to load the contents of a URl
//AJAX:  Asynchronous JavaScript and XML
// XML is a superset of HTML using tags to create data structures
// XML has been superceded by JSON

//make a new instance. I.e., this is the constructor. This is built into the browser.

//Thhis is the ancient way of attaching callback functions (event handlers) to specific events
// An object, such as a DOM node, has a bunch of properties
// with names '.onLoad' etc. Your function will then be run when that event happens.

// xhr.onreadystatechange = function(){
//     console.log('Ready state change:', xhr.readyState ); //ready state
//     console.log('Response data:', xhr.response );

// } //under the hood

const lookupNumber = function ( number ){
    $('#answers').html("loading...")

    const xhr = new XMLHttpRequest(); 

    xhr.onload = function(){
        //This code will run when xhr decides the response is avaiable
        console.log('actually available data ', xhr.response);
        const data = JSON.parse( xhr.response ) //turn the response into a JS object
        $('#answers')
        .empty() //remove the previous results 
        .prepend(`
            <h2>${data.number}</h2>
            <h3>${data.text}</h3>
        `); //use Jquery to append the response to the body
    }

    //Tell it which URL to open and HOW

    xhr.open('GET', `http://www.numbersapi.com/${number}?json`)

    xhr.send(); //actually send the request. Unlike Ruby, this line does not block

    // console.log('This line will run before the above! That is, it will run too soon');

    // console.log( 'response', xhr.response);
}

$(function(){
    $('#submitButton').on('click', function(){
        
        lookupNumber($('#numberQuery').val());
    });

});//DOM ready handler 


