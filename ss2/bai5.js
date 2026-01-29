let bookName = prompt("Enter book name:");
let status = prompt("Enter book status (có sẵn / đã mượn):");
let publishYear = parseInt(prompt("Enter publish year:"));

let currentYear = new Date().getFullYear();
let yearDiff = currentYear - publishYear;

if (stats === "có sẵn" && yearDiff <= 5) {
    console.log("Sách này mới và có sẵn để mượn");
} else if (stats === "đã mượn" && yearDiff <= 10) {
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (stats === "đã mượn" && yearDiff > 10) {
    console.log("Sách này đã mượn và khá cũ");
} else if (stats === "có sẵn" && yearDiff > 5) {
    console.log("Sách này có sẵn nhưng đã lâu năm");
}
