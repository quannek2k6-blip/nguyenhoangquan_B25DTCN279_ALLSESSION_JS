let bookName = prompt("Enter book name:");
let author = prompt("Enter author name:");
let publishYear = parseInt(prompt("Enter publish year:"));

let currentYear = new Date().getFullYear();

if (publishYear === currentYear) {
    console.log("This is a new book!");
} else if (currentYear - publishYear <= 5) {
    console.log("The book is quite new");
} else {
    console.log("The book is old");
}

console.log("Book name: " + bookName);
console.log("Author: " + author);
console.log("Publish year: " + publishYear);
