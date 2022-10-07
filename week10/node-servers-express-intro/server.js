//This is the older node.js syntax for importing code.
// it is equivalent to to import express from "express"
// import axios from 'axios'
//This is called c"CommonJS" import syntax and is being gradually replaced by the
// literal 'import from' (like in React/ Vue)
const  express  =  require("express");

//use the express function returned from the 

const app = express();

// ..What about a database?>
// MongoDB


const ejs = require('ejs');
//use the ejs template system as an express plugin
app.set('view-engine', ejs);

//use the public folder as an assets 'passthrough' folder
app.use(express.static('public'))


//Listen on port 8000
app.listen(8000, () => {
    console.log('Now listening at http://localhost:8000');
});

//Define the routes that we want to respond to 
//and how we should respond

//the callback function is the function to run on the response

app.get( "/", (req, res) => {
    console.log('Request received for "/"');

    //define the response that is provided.
    //otherwise will leep waiting.
    res.send('<h1>Hello from express!</h1>')

}) //get '/'



app.get( '/guestbook', (req, res) => {
    console.log('Request received for "/guestbook"');

    //define the response that is provided.
    //otherwise will leep waiting.
    res.send('<h2>Sign my guestbook!!!</h2><img src="http://www.fillmurray.com/300/200" />')

}) //get '/guestbook'


app.get("/dogs/:id", (req, res) => {

    console.log('querystring', req.query)
    // res.send(`Your dog info, sir! ${req.params.id}`)

    res.json({
        name: 'Rufus',
        roundness: 9

    }); //sends json dtat

});3

app.get("/dogs/:id/:action", (req, res)=> {
    console.log('params:', req.params);
    res.send(`Your params,sir, ${req.params.id}`)

});

app.get('/hello/:person', (req, res) => {
    const message = "This is an example message";
    res.render('greeting.ejs', {
        msg: message,
        number: Math.random(),
        name: req.params.person
    });
})
