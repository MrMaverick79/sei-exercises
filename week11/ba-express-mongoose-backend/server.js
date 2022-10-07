const { response } = require('express');
const express = require('express');
const bodyParser = require("body-parser"); //middleware for post requests
const app = express();

const PORT = 3000; //proces.argv[2] to get from command line

const cors = require('cors');

//Use this CORS package as part of the Express "middleware stack"
app.use( cors() ); //i.e set the CORS to allow header for us on every request, for AJAX requests

//Middleware config to send POST requests through bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//alternatively (Luke's example):
//app.use( express.json())
// app.use(express.urlencoded({ extended: true}));

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

      try{

          const flight = await Flight.findOne( { _id: req.params.id});
          
          const reservations = {};
          flight.reservations.forEach(res => {
             
              reservations[`${res.row}-${res.col}`] = res.user_id;
  
          });
  
          res.send({ flight, reservations });

      } catch (err) {
        console.log('Error finding flight by id', req.params, err);
        res.sendStatus( 422 )
      }

  

}); //show route /flights/:id

// Reservation booking route: POST  /reservations + data
// TODO: need to tell Express to handle POSTed form data
//and then  work out how to do a Mongoose quey to find
// the reservations flight (by ID), and push a new reservation
// onto the flights array of reservation.
app.post('/reservations', async(req, res) => {
    console.log('POST /reservations')

    try{
        const flight = await Flight.findOne( { _id: req.body.flight_id});
        console.log('Here is the req', req);
        console.log('Flight Found', flight)

        //some validation
        flight.reservations.forEach(reserve => {
            if(req.body.row === reserve.row && req.body.col === reserve.col) {
                res.send("unable to reserve seat");
                return
            } 
        }); //if we get here we know we can make the booking

        console.log('We could make this reservation');
        await flight.updateOne({


                //Note the below works, but you can also use $push <- this is a special
                // mongo command:
                $push: {
                 reservations: [ 
                    { 
                        row: req.body.row,
                        col: req.body.col,
                        user_id: 3 //hardcoded for testing --matches the front end had-coded version
                    
                    },

                  ]   
                }

                //my original version--which still works
                // reservations: [                   
                //     { 
                //         row: req.body.row,
                //         col: req.body.col,
                //         user_id: 3 //hardcoded for testing --matches the front end had-coded version
                    
                //     },... flight.reservations 
                // ]    
                
                
               
                    
            })
        
        res.json({ 
            row: req.body.row,
            col: req.body.col,
            user_id: 3 //hardcoded for testing --matches the front end had-coded version
        
    })

    } catch(err){
        console.log('There has been an error', err);
    }

    // const reservation = Flight.create({})
})



