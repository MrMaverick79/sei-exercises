const { response } = require('express');
const express = require('express');
const app = express();

const PORT = 3000; //proces.argv[2] to get from command line

const cors = require('cors');

//Use this CORS package as part of the Express "middleware stack"
app.use( cors() ); //i.e set the CORS to allow header for us on every request, for AJAX requests


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}...`);
})


//Load up the mongoose DB
const mongoose = require('mongoose');
const Flight = require('./models/Flight');


mongoose.connect('mongodb://127.0.0.1/ba');
const db = mongoose.connection;

db.on('error', err=> {
    console.log('Error connecting to DB server', err);
    process.exit( 1 );
    //TODO: leave express server runniong, but set global error flag
    // and respond to all HTTP request with an error automaticaly
})


// BA API Routes

app.get('/', (req, res) => {


    console.log('Root route was requested');
    res.json( { hello: 'there'})

}); // get / 


app.get('/flights', async(req, res) => {

    try {
        
        const flights = await Flight.find()
        res.json( flights )

    } catch (err) {
        console.error('Error finding all flights', err);
        res.sendStatus( 422 ); //'Unprocessable entitiy' OR
        //res.status( 422 ).json( {error: "DB connection error"}); //'Unprocessable entitiy' OR
        
    }


}); //Get flights

// Search route /flights/search/:origin/:destination
app.get('/flights/search/:origin/:destination', async(req , res) => {
    
    try{

        
        const flights= await Flight.find({
    
            origin: req.params.origin,
            destination: req.params.destination 
    
    
        });

        res.json(flights)

    } catch (err ){
        console.log('Error searching flights', req.params, err);
        response.sendStatus( 422 )
    }
     
});

app.get('/flights/:id', async(req, res) => {

   
        const flight = await Flight.findOne( { _id: req.params.id});
        
        const reservations = {};
        flight.reservations.forEach(res => {
           
            reservations[`${res.row}-${res.col}`] = res.user_id;
            
        });

        res.send({ flight, reservations });

  

})

//show route /flights/:id

// Reservation booking route: POST  /reservations + data




