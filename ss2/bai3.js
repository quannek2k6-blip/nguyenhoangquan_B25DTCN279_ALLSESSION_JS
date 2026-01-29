let bookName = prompt("Enter book name:");
let category = prompt("Enter book category:");
let status = prompt("Enter book status (available / borrowed):");
if (category === "Khoa học" || category === "Lịch sử") {
    if (stats === "có sẵn") {
        console.log("Sách này có sẵn trong thư viện");
    } else {
        console.log("Sách đã được mượn");
    }
} else if (category === "Văn học" || category === "Truyện") {
    console.log("Sách này có thể đọc giải trí");
}
