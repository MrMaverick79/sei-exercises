//this version uses Mongoose

const mongoose = require('mongoose')

//Load the Flight model
//Accesses the module.exports as set the end of Flight.js
const Flight = require('./Flight'); 

// Use the mongoose style syntax for connecting to the DB
// NB it uses a series of event handlers to avoid the big
//mess of options and callback functions that we had to 
//give in the 'vanilla-mongo-db-seed'


//Note the suffix is the db selection
mongoose.connect('mongodb://127.0.0.1/ba')

const db = mongoose.connection;

db.on('error', err => {
    console.log('Connection error', err);
    process.exit(1); //quit

}); //db.on


//the once here will only fire once (on connection). The envent handler will only run one time
db.once('open', async() => {
    console.log('Success, DB connected, model loaded');

    //1. First we want to destroy all the flights
    await Flight.deleteMany();

    //2. Flight,create! eqivalent
    const createdFlights = await Flight.create([ 
        {
    
            flight_number: 'BA123',
            origin: 'SYD',
            destination: 'MEL',
            departure_date: new Date('2022-11-20T04:20:00Z'),
            airplane: { name: '737 Max', rows: 20, cols: 6 },
            reservations: [
              { row: 1, col: 1, user_id: 10 },  // NOT real user_ids, just placeholders
              { row: 2, col: 3, user_id: 10 },
              { row: 3, col: 3, user_id: 11 },
    
            ] // reservations[]
    
          },
    
             
          {
    
            flight_number: 'BA456',
            origin: 'SYD',
            destination: 'MEL',
            departure_date: new Date('2022-11-23T04:20:00Z'),
            airplane: { name: '767', rows: 16, cols: 4 },
            reservations: [
               { row: 1, col: 1, user_id: 10 },  // NOT real user_ids, just placeholders
               { row: 1, col: 3, user_id: 11 },
               { row: 1, col: 3, user_id: 11 },
    
            ] // reservations[]
    
          },
    ]);

    console.log('flights', createdFlights)

    //Active record equivalent of Flight.all
    // const flights = await Flight.find()
    // console.log('flights', flights);


    process.exit( 0 )
}); //db.once
