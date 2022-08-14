// Add a script tag to the bottom of the page, just before the closing </body> tag.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

document.body.style.fontFamily = "Arial, sans-serif"

// (In JS) Set the content of each of the empty <span>s (nickname, favorites, hometown) to contain your own information.

//with const
const nickname = document.querySelector('#nickname')
nickname.innerHTML = "Tuckers"

//without
//without
document.querySelector('#favorites').innerHTML = "I don't know what this is asking."

document.querySelector('#hometown').innerHTML = "Canberra"


nickname.addEventListener('click', function() {
    console.log('nickname clicked')
    nickname.innerHTML = "JK";
}); 


const heading = document.querySelector('h1');

heading.addEventListener('mouseover', function() {
    heading.style.transition = "1s";
    heading.style.fontSize = "60px";
});

heading.addEventListener('mouseout', function() {
    heading.style.transition = "1s";
    heading.style.fontSize = "32px";
});


// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

const allListItems = document.querySelectorAll('li');

for(let i = 0; i < allListItems.length; i ++) {
    allListItems[i].className = "listItem"
} 


const listClass = document.querySelectorAll('.listItem');

listClass.forEach(list => { //change all in listClass to have 'red'
    list.style.color = "red";
});

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const newImage = document.createElement('img')
newImage.src= "http://www.fillmurray.com/200/300"

document.body.append(newImage)
   

// The Book List
// Keep track of which books you read and which books you want to read!

// Create a webpage with an h1 of "My Book List".
// Add a script tag to the bottom of the page.
// Copy this array of books:

let books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: "https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L._SX316_BO1,204,203,200_.gif"
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"
    }
  ];

for (let i= 0; i < books.length; i++) {

    let newEntry = document.createElement('li');
    
    if(books[i].alreadyRead) { //if read turns the li green
        newEntry.style.color = "green";
    } //end if

    let newImage = document.createElement('img');
    newImage.src = books[i].url
    let hook = document.querySelector('#bookHook')
    newEntry.innerText = `"${books[i].title}", by ${books[i].author}` ;
    hook.appendChild(newEntry)
    document.body.appendChild(newImage)

}//end for




//   terate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// // Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.



