console.log('Mic check');
console.log(`Underscore:`, _); //check that main.js has access to the _underscore library.


// example data to work with

const bros = ['Groucho', 'Harpo', 'Chico'];

// There are two styles for using the underscore function:

// First as an object:

// _.each( bros, function(){});

// // The second is as a function, like arr.forEach():

// _(bros).each(function(){});


_( bros ).each( function( item ){
    //This functon is run by .each for every item in the array. Each item is passed in to the function as its first argument.
    console.log(' _each item', item);
});

//This was needed prior to he most recent version of JS, which now contains forEach():

bros.forEach( function(item){
    console.log('forEach item,', item);
})

//There are things, however, that _underscore can do that JS cannot--loop over objects.

//Test data
const groucho = {
    name: 'Groucho',
    instrument: 'Guitar',
    vice: 'cigars'
};

_( groucho ).each( function (val, key){
    console.log('object key, value: ', key, ',', val);
    
});

//Arrow functions

//Simplest version:

// The argument is 'item' and the function body is a single expression (yields a single value)

// No () are needed or any {}. But ut must be a single epxpression
bros.forEach( item => console.log(item))


// Longer version (with multiple arguments)

bros.forEach((item, index) => console.log(index, item));


//Longer again (when you have multiple lines of code)

bros.forEach( (item, index) => {
    console.log(item);
    console.log(index);
    //You could have if blocks etc in here becuase of the {}
    //i.e. This is a normal function block without an implicit return
});

//Creating named functiuons looks the same:

const add = (first, second) => {
    console.log(first, second);
    return first + second
};

add(1, 2)

// Another way of writing this:
const shortAdd = (first, second) => first + second

console.log(shortAdd(3, 5));

//NB: If the implicit return in the one-liene version will not be present in anby version that has {} (without a return, ofc).

//Arrow functions do not work well with 'this'. I.e., they do not chnage it in the way you might epxect. That is, do not use them with JQuery.

//===MAP==//

console.log('Map()========');

const nums = [ 1,2,3,4,5,6];

// map transforms an input arrar of values
// into an oputout array of values on
// what your callback function returns.
// NOTE that map will always return an array of the sdame length as you input
//Alos NOTE map returns its result: i.e. it is non-destructive  
//In this way, yo will want to save the output, unlike forEach

//Old way:

const output = _(nums).map( function( item ) {
    console.log(item); // will allow you to print each item);
    return item * 2
    //you can also set other return vlaues here (like return Math.random), which will be returned nums.length times in ana array
    
} )

console.log(output);

// Short way (&&the ES6 version):

const outputShort = nums.map( x => x * 2 )

console.log(outputShort);



// Reduce() (aka'inject' iun Ruby) takeds an inpout array and boils it down to a single value 
//repeatedly uapplying the function you give it. As with map, reduce() cares
// about the return value
//Takes two parameter: previousvalue and currentvalue. Previousvalue remembers what was returned the last time.
//Unless you set another parameter, the first 'previous' value will be the item at position[0] (in nums, in this case). The 1000 here is doing this.

 const numsOutcome = nums.reduce( (previous, current ) => previous += current, 1000); 

 console.log(numsOutcome);


 const concatBros = bros.reduce( (str, br)=> str + ' ' + br)
 
 console.log('Conctaenate Bros: ', concatBros);

 //With an object 
 const concatObject = bros.reduce( (obj, br) => {
    obj[br] = true;
    return obj
  }, {});
 
  console.log(concatObject);


  //ActiveRecord-Style Underscore methods for searching through data
  //usually, an array of objects

  const brothers = [
    { name: 'Groucho', instrument: 'guitar', vice:'cigars', age: 44, nums:[1,2,3,5]},
    { name: 'Harpo', instrument: 'harp', vice:'mutism', age: 42, nums:[1,2,3]},
    { name: 'Chico', instrument: 'guitar', vice:'infedelity', age: 39, nums:[1,2]}
  ];


  //find instances of guitar (or at least the first one that matches)
  //This method assumes it is dealing with an array of objects.
  //Therefore the argument you give it is a list of keys and values to match against each object in an array.

  const guitarist = _(brothers).findWhere({instrument: 'guitar', age: 39});
  
  console.log(`guitarist: `, guitarist)


  //Here is the ES6 version. It is slightly different in that it does not assume the array
  //elements are all objects. So instead of passing it a 'search' object, you have 
  //to give it a test function: the first array element
  // which causes the function to return ture is what
  // the find() itself returns.

  const es6Guitarist = brothers.find(function(item){
    //Will return the FIRST thing that returns true
    return item.instrument === 'guitar' && item.age === 39;
    
  })

  console.log('es6Guitarist:', es6Guitarist);

//One line version

const shortEs6Guitarist = brothers.find( b => b.instrument === 'guitar');

//On nums:

const foundNums  = nums.find(n => n >3); 

//Like ActiveRecords, " brother.where instrument: 'guitar'" returns all  occurances (not just the first match)

const allGuitarists = _(brothers).where( { instrument: 'guitar'})

console.log('All G:', allGuitarists);

//The es6 equivalent is filter(), which is the same as Ruby's select
//It does not assume you are dealing with an array of obkjects
//You have to supply a function

const es6AllGuitarists = brothers.filter( g => g.instrument ==='guitar');

console.log( es6AllGuitarists );


//How to get a boolean as to whether ANY element passes the test in an array
//The some will return true if any found,
// or false if not

const areThereAnyGuitarists = brothers.some( g => g.instrument ==='guitar');

console.log(areThereAnyGuitarists);

//To check whether EVERY is the same:
const isEveryoneOld = brothers.every( b => b.age > 40);

console.log(`Some test:`, isEveryoneOld);

//You can also string operations together:
console.log(


brothers
  .map( b => b.age )
  .filter( age => age > 40)
  .reduce( (acc, n) => acc +n )
);

console.clear() //for the exercises below

///=========== Exercises =================///

// Log out the answers to all of the following questions!

// Here is some data that you can work with.

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Exercises

//     Iterate through numbers and log each number to the console
numbers.forEach( n => console.log(n));

//     Iterate through numbers and multiply each one of them by 5

const mappedNums = numbers.map( n => n * 5)
console.log(mappedNums);

//     Iterate through numbers and reduce it by adding them together
const reducedNums = numbers.reduce((acc, n) => acc + n)
console.log(reducedNums); 

//     Get an array of all of the people in people that have the username "E"
const findE = people.filter( p => p.username === 'E' )
console.log(findE);
//     Find the first object in people that has the id of 3
const findId3 =  people.find( p => p.id === 3)
console.log(findId3);
//     Find the first person who has an age of less than 50
const findYoung =  people.find( p => p.age < 50)
console.log(findYoung);
//     Get an array of all of the people with an age of over 60
const findOld = people.filter( p => p.age > 60 )
console.log(findOld);
//     Remove all of the people with an age less than 40
const removeMiddle = people.filter( p => p.age > 40 )
console.log(removeMiddle);



