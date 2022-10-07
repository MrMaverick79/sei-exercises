 //This is like a Rails app/models/flight.rb
 //Except it's also like the db/scheme.rb like
 // a migration to create the correct columnst

 const mongoose = require('mongoose');

 const FlightSchema = new mongoose.Schema({

    // Define the 'columns' for this 'table' (in SQL speak)
    // OR
    //Define the 'properites' for this 'document'

    // Let's use snake_case firled names so that they
    // match what is used in our Rails BA database

    //In a pure full-stack js app, you would be more likely to use camel case names. ie. flightNumber, not flight_number

    //We are just using this to replace our existing DB/

    flight_number: {
        type: String, //string is the JS constructor for a string
        required: true
    },

    origin: String,
    destination: String,
    departure_date: Date,

    airplane: {
        name: String,
        rows: Number,
        cols: Number,

    },

    reservations: [
        {
            row: Number,
            col: Number,
            user_id: Number, // placeholder
            
            //TODO: make this work
            user: {
                //how do I connect to a User by using ID?
                // research Mongoose Reference
                //it is essentially a foreign key
            },


        }
    ],



 }); //end FlightSchema definition


const model =  mongoose.model('Flight', FlightSchema)

// CommonJS export syntax (i.e. you want to be able to require this file(./models/Flight)) from seeds or server:

//this is the olderr version, which will allow mode to be available when someone uses require
module.exports = model