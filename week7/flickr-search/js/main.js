console.log('Mic check');

//UL EXAMPLE:  https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=ocean+coral&format=json&nojsoncallback=1

//throttle() <- shold tell us where we re relatvie to the end of the doc. 

const FLICKR_API_KEY= "2f5ac274ecfac5a455f38745704ad084"
const FLICKR_BASE_URL = "https://www.flickr.com/services/rest/"


$(function(){

    $('#query').focus(); //puts the focus into the query field

    $('#searchForm').on('submit', function( ev ){
      
        ev.preventDefault(); //stop the form from reloading
        const query = $('#query').val();
        getSearchResults ( query );
      
    });




}); //DOM readiness 

const getSearchResults = queryText => {
    
    $('#results').html('<p>Loading Results</p>')
    
    axios.get( FLICKR_BASE_URL, {
        params:{ //Axios will use this object to add the params
            api_key: FLICKR_API_KEY,
            method: 'flickr.photos.search',
            format: 'json',
            nojsoncallback: 1,
            text: queryText
        }
        
    })
    .then( res => {
        rendersearchResults(res.data.photos);
    })
    
    .catch( err => {
        console.error('Error loading search results:', err);
    })
}

const rendersearchResults = (results) => {

    $('#results').empty()
    
    results.photo.forEach( photo => {
        const imageUrl = generateImageUrl(photo)
        console.log(imageUrl);
        const $img = $(`<img src="${imageUrl}">`);
        $('#results').append($img)
    });


   
}

const generateImageUrl = (obj) => {
    return `https://live.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_q.jpg`

};//generate image URL

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