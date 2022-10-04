let db; //for storing our dtatbase connection

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(

    'mongodb://127.0.0.1:27017', //the url to reach the server on our machine
    {}, //options
    (err, client) => {
        if( err) {
            console.log('Error connecting to MongoDB', err);
            process.exit( 1 ); //non 0 means an erro
        }

        //If no error, it means the connection was successful
        db = client.db('ba'); //will create it if it doesnt exist. 

        db.collection('flights').deleteMany( {}, (err, result) => {
          if(!err){
            insertFlights();
          }
        });

        
        

    }

); //.connect

const insertFlights = () => {


      //collection is like a row in a table
      db.collection('flights').insertMany(
        [
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
    
        ], // end of array of flights to insert 
    
        
    
        (err, result) => {
    
    
          if( err ){
    
            console.log('Error inserting flights:', err);
    
            return;
    
          }
    
          
    
          printFlights(); // query the flights we just added and print them out     

          console.log(`Success! Added ${ result.insertedCount } flights.`);
    
    
          
             
          
          process.exit( 0 ); // no errors

    
        }
    
      
    
      );
    

    
    }; // insertFlights()

    const printFlights = async() => {


      //1. Chaining .then() .catch()
      // promiseFindFlights()
      //   .then( data => {
      //     console.log('flights', data);
      //     process.exit (0)
      //   })
      //   .catch( e => {
      //     console.error('Problem!' , e)
      //     process.exit (1)
      //   })

      // //2. Async /await version
      // try{
      //   const data = await promiseFindFlights();
      //   console.log('flights', data);

      // } catch (e ) {
      //   console.log('problem!', e)
      // }

      try{
        const answer = await timerPromise();
        console.log('answer', answer);
        process.exit (0);

      } catch (e) {
        console.log('error')
        process.exit( 1 );
      }

      // Like ActiveRecord Flight.all
      
      // process.exit( 0 );
    
    }; // printFlights


    const promiseFindFlights = () => {

      return new Promise( (resolve, reject) => {
        //resolve and reject are really just .then() and .catch()

        db.collection('flights').find().toArray( (err, flights) => {
        
          //Fail! ormise will reject with err
          if( err ){

            //This will trigger a .catch( error => {}), providing 'err' as he catch callbacks' argument
            //OR for async /await, using try/catch, this will trigger the ctach block and provide
            //'err' as the ctahc block's error argument

            reject( err );
          }
      
          //Success-- the resolution of the promise
          // console.log('Flights', flights);
          resolve( "Success", flights );  //this will trigger a .then(data => {}). i.e. this will trigger a .then or an await
    
      });



      }); //eo Return promise




      



    } //promiseFindFlights


    const timerPromise =() => {

      return new Promise( (resolve, reject) => {

          setTimeout( () => {

            //flip a coin and reolve 50% and reject 50%
            if( Math.random() >  0.5){
              resolve("RESOLVED")
            } else {
              reject( "REJECTED")
            }

          }, 2000)

      })
    }; //timer promise