console.log('main js loaded', $, axios);


//DOM ready? <- it should be by the time the axios request is made.

//Make an axios request

//API endpoint, back tto the same server that loaded 
// the HTML page this JS is loading in
// This is unusual =-- in the REACT era, its more common
// for one server to load the HTML page and 
//another server to host the API.
// -BUT if we do that, we have to deal with CORS security restrictions
// enforced by the browser

axios.get('/uptime.json')
    .then( res => {
        console.log( res.data );
        $('#uptime').html( res.data.output);
    } )
    .catch( err => {
        console.error('Error loading /uptime:' , err);
    });


axios.get('/cpuhog')
    .then( res => {
        $('#hog').html(res.data.hog)

    })
    .catch( err => {
        console.error('Error loading /cpuhog', err);
    })


axios.get('/messages')
.then( res => {
    console.log(`Message response:`, res.data);
    $('#messageIndex').empty()
    res.data.forEach(m => {
        $(`#messageIndex`).append(`
            <div class="message">
                <p>User: ${m.user_id}</p>
                <blockquote>
                ${m.content}
                </blockquote>
                <p>${m.created_at} </p>
            </div>
        `);
    })
})
.catch( err => {
    console.error('There\'s been an error' , err);
});