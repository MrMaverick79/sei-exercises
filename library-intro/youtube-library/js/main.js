// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
const allLinks = document.querySelectorAll('li a');
// Iterate through the array. In each iteration of the loop:

for (let i = 0; i < allLinks.length; i++) {
    const element = allLinks[i];
    let currentHref = element.href
    let currentThumb = youtube.generateThumbnailUrl(currentHref)
    let newImg = document.createElement('img')
    newImg.src = currentThumb;
    allLinks[i].appendChild(newImg)
}


// Find the current href using currentLink.href (assuming your DOM element loop variable is called currentLink), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)
