/* MANDATORY JS EXERCISES (create a different file for this exercise)
    
    
    
   
    
*/

function addList () {

// 1. Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]

// 2) Create an unordered list using JavaScript and save it in a variable
let newList = document.createElement("ul")

// 3) Cycle the array and create a list-item via JavaScript for every element
for (let genre in genres) {
let newItem = document.createElement("li")
// 4) Insert the genre as text in the list-item
newItem.innerText = genre
// 5) Append the list items in the unordered list
newList.appendChild(newItem)
}

// 6) Append the unordered list in the document. The list should appear in the page.
let genreDiv = document.getElementById("genre-div")
genreDiv.appendChild(newList)
}

addList()
