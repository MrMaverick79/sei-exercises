console.log('Mic check');

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

const getApiData = async function(){
    //async await makes JS code look like synchronous code
    //'Await' means await for the following promise to resolve!
    try {
        const res = await axios.get("http://www.numbersapi.com/42?json");
        console.log('Response', res.data);
    } catch (err) {
        console.error('Something went wrong:', err);
    }
}
getApiData();


//What is a promise?
// This is a way of dealing with asynchronous data, like .onload. Promises are more structured and easier 
//They alow us to respond to when datat arrives by running one or more callback functuions
// but in a linear way.

//A promise is either in a state opf 'pending' or 'fulfilled' (could be accepoted or rejecred)