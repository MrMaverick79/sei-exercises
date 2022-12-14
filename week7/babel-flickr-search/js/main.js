"use strict";

console.log('Mic check');

//UL EXAMPLE:  https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&format=json&nojsoncallback=1

//throttle() <- shold tell us where we re relatvie to the end of the doc. 

var FLICKR_API_KEY = "2f5ac274ecfac5a455f38745704ad084";
var FLICKR_BASE_URL = "https://www.flickr.com/services/rest/";
var currentPage = 1;
var query = void 0; //just in case the user deletes or changes this during pagination. i.e. Should only change on a new search

$(function () {

    $('#query').focus(); //puts the focus into the query field

    $('#searchForm').on('submit', function (ev) {
        currentPage = 1; //returns to the first page for a new search
        ev.preventDefault(); //stop the form from reloading
        query = $('#query').val();
        getSearchResults(query, currentPage);
    });

    //back and forward buttons
    $('#next').on('click', function () {
        currentPage++;
        getSearchResults(query, currentPage);
    });

    //back
    $('#back').on('click', function () {
        if (currentPage > 1) {
            currentPage--;
            getSearchResults(query, currentPage);
        }
    });

    //show results after individual search
    $('#toResults').on('click', function () {
        $('#singleImage').empty(); //get rid of the image in single image view and all  details
        $("#results").show();

        $('#pageLinks').show();
        $('#toTop').show();
        $('#toResults').hide();
        $('form').show();
        getSearchResults(query, currentPage);
    });

    //Infinite scroll practice
    $(window).scroll(function (e) {

        if (e.target.documentElement.scrollTop > e.target.documentElement.scrollTopMax - 200) {
            currentPage++;
            getSearchResults(query, currentPage);
        }
    });
}); //DOM readiness 

var getSearchResults = function getSearchResults(queryText, pageNum) {
    $('.navigation').show();
    $('#results').html('<p>Loading Results</p>');

    axios.get(FLICKR_BASE_URL, {
        params: { //Axios will use this object to add the params
            api_key: FLICKR_API_KEY,
            method: 'flickr.photos.search',
            format: 'json',
            nojsoncallback: 1,
            text: queryText,
            page: pageNum
        }

    }).then(function (res) {
        //res.data.page is the current page, res.data.pages  it the total number of pages
        rendersearchResults(res.data.photos);
        renderPageLinks(res.data.photos);
    }).catch(function (err) {
        console.error('Error loading search results:', err);
    });
};

var rendersearchResults = function rendersearchResults(results) {

    $('#results').empty();

    $('#results').append("<p>Showing page " + currentPage + " of " + results.pages);

    results.photo.forEach(function (photo) {
        console.log(photo);
        var imageUrl = generateImageUrl(photo, "q");
        var $img = $("<img src=\"" + imageUrl + "\"   \n        onclick=getSingleImage(" + photo.id + ")>");
        $('#results').append($img);
    });
};

var renderPageLinks = function renderPageLinks(obj) {
    //this is the total number of pages. For some reason, this chnages with every search!
    console.log(obj);
    $('#pageList').empty();
    var numberOfPages = obj.pages;
    if (numberOfPages > 5) {
        for (var i = currentPage - 3; i < currentPage + 3; i++) {
            if (i > 0) {
                $('#pageList').append("<a href=\"#\"><li onclick=goToPage(" + i + ")>" + i + "</li></a>");
            }
        }
    }
};

var goToPage = function goToPage(page) {
    currentPage = page;
    getSearchResults(query, page);
};

var generateImageUrl = function generateImageUrl(obj, size) {
    return "https://live.staticflickr.com/" + obj.server + "/" + obj.id + "_" + obj.secret + "_" + size + ".jpg";
}; //generate image URL

//====== single photo page ====//

//get
var renderSingleImage = function renderSingleImage(data) {

    console.log('photo Id is ', data);
    var imageUrl = generateImageUrl(data, 'b');

    $("#results").hide();
    $('#pageLinks').hide();
    $('#toTop').hide();
    $('#toResults').show();
    $('form').hide();
    $('#singleImage').append("<img src=\"" + imageUrl + ")}\">").append("<ul>\n            <li>\"" + data.title._content + "\"</li>\n            <li>Photo taken on " + data.dates.taken + " by " + data.owner.realname + " from " + data.owner.location + "</li>\n        \n        </ul>").append("<p><em>" + data.description._content + "</em></p>");

    // console.log('Clicked');
};

var getSingleImage = function getSingleImage(photoId) {
    $('.navigation').hide();
    $('#results').html('<p>Loading Results</p>');

    axios.get(FLICKR_BASE_URL, {
        params: { //Axios will use this object to add the params
            api_key: FLICKR_API_KEY,
            method: 'flickr.photos.getInfo',
            format: 'json',
            nojsoncallback: 1,
            photo_id: photoId

        }

    }).then(function (res) {
        //res.data.page is the current page, res.data.pages  it the total number of pages
        renderSingleImage(res.data.photo);
    }).catch(function (err) {
        console.error('Error loading search results:', err);
    });
};

//render --do this first

//++++++STUFF FROM PREVIOUS PROJECT++++++//


// axios.get("http://www.numbersapi.com/42?json").then( 

//     function ( res ){
//     //when the prmoise resolves, the 'item' callback is run
//     console.log(`Resolved! Data is `, res.data);
// })
// .catch( function (err ){
//     //If the prmoise is reected
//     console.error('Oh no!', err);
// })

// //Or, if you have 

// const getApiData = async function(){
//     //async await makes JS code look like synchronous code
//     //'Await' means await for the following promise to resolve!
//     try {
//         const res = await axios.get("http://www.numbersapi.com/42?json");

//         return res.data
//     } catch (err) {
//         console.error('Something went wrong:', err);
//     }
// }


//What is a promise?
// This is a way of dealing with asynchronous data, like .onload. Promises are more structured and easier 
//They alow us to respond to when datat arrives by running one or more callback functuions
// but in a linear way.

//A promise is either in a state opf 'pending' or 'fulfilled' (could be accepoted or rejecred)