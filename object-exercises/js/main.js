// Exercises: Objects
// The Recipe Card
// Never forget another recipe!
console.info('favourite reiupes starts here:')
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
const favouriteRecipes = {
    title : "General Tso's Tofu",
    servings : 4,
    ingredients : [
        "tofu",
        "soy sauce",
        "brown rice"
    ]
};  //end favouriteRecipes



// On separate lines (one console.log statement for each), log the recipe information so it looks like:

// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
console.log(favouriteRecipes.title);
console.log(`Serves : ${favouriteRecipes.title}`);
console.log(`Ingredients :`)
console.log(favouriteRecipes.ingredients[0]);
console.log(favouriteRecipes.ingredients[1]);
console.log(favouriteRecipes.ingredients[2]);



// The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

const readingList  = [
    
    {
        title : "One Flew Over the Cuckoos Nest",
        author: "Ken Kesey",
        alreadyRead : true,

    },

    {
        title : "To Kill A Mockingbird",
        author: "Harper Lee",
        alreadyRead : true,
    },

    {
        title : "The Catcher in the Rye",
        author: "JD Salinger",
        alreadyRead : false,
    },

]

// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

for (books in readingList) {
    const message = readingList[books].alreadyRead ? "have already" :  "need to";
    console.log(`You ${message} read "${readingList[books].title}" by ${readingList[books].author}.`)
}; 








// The Movie Database
// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
// Maybe the join method will be helpful here

const movieDatabase = {
    title :  "Casino",
    duration : 214,
    stars : [
        "Robert De Niro",
        "Joe Pesci",
        "Sharon Stone"
    ],
    movieDetails : function () {
        console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars.join(", ")}`);
    }
}; // end movieDatabase

movieDatabase.movieDetails();