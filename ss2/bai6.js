let bookName = prompt("Enter book name:");
let borrowerName = prompt("Enter borrower name:");
let bookStatus = prompt("Enter book status (có sẵn / đã mượn / không có sẵn):");
let borrowDays = parseInt(prompt("Enter number of borrowed days:"));
let hasCard = prompt("Do you have a library card? (có / không):");
if (bookStatus === "có sẵn" && hasCard === "có") {
    console.log("Chúc mừng, bạn có thể mượn sách này");
} else if (bookStatus === "đã mượn" && borrowDays < 30) {
    if (hasCard === "có") {
        console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");
    }
} else if (bookStatus === "không có sẵn") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại");
}
