let booksId = [];
let booksName = [];
let inventoryQuantity = [];

let soLuong = parseInt(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?"));

for (let i = 0; i < soLuong; i++) {
    let maSach = "";
    while (maSach.trim() === "") {
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    }

    let tenSach = "";
    while (tenSach.trim() === "") {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    }

    let soLuongTon = -1;
    while (soLuongTon < 0 || isNaN(soLuongTon)) {
        soLuongTon = parseInt(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":"));
    }

    booksId.push(maSach);
    booksName.push(tenSach);
    inventoryQuantity.push(soLuongTon);
}

console.log("Tổng số loại sách đang kiểm tra: " + booksId.length);

let demCanBoSung = 0;
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] <= 5) {
        demCanBoSung++;
    }
}
console.log("Số lượng sách cần ưu tiên bổ sung (≤ 5 bản): " + demCanBoSung);

console.log("Các mã sách đã hết hàng:");
for (let i = 0; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] === 0) {
        console.log(booksId[i]);
    }
}

console.log("Danh sách chi tiết:");
for (let i = 0; i < booksId.length; i++) {
    console.log(
        (i + 1) + ". " +
        booksId[i] + " - " +
        booksName[i] + " - " +
        inventoryQuantity[i]
    );
}
