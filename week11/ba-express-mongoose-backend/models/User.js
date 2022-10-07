const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    passwordDigest: String,
    createdAt: {
        type: Date,
        default: Date.now //automatically default this field to current date
    },
    
    //Denormanlization - duplkuicate some data where it makes snese:
    // i.e. both FLight and User can keep a list of thier related reservations

    reservations : [
        {
            row: Number,
            col: Number,
            //

            //Even though we are duplicating some reservation data
            // we still want ti to link to the Flight that it is a reservations
            //for i.e., the Flight that it 'belongs to'

            flight: {
                ref: 'Flight', //a reservation belongs to (refers to) a Flight
                type: mongoose.Schema.Types.ObjectId //the ID of a docuent in the FLight
            }
        }

    ]


}); //schema

module.exports = mongoose.model('User', UserSchema)