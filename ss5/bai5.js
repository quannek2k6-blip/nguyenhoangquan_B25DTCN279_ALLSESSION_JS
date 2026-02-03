let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let soLuong = parseInt(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?"));

for (let i = 0; i < soLuong; i++) {
    let maSach = "";
    let trungLap;

    do {
        trungLap = false;
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
        if (maSach.trim() === "") continue;

        for (let j = 0; j < booksId.length; j++) {
            if (booksId[j] === maSach) {
                trungLap = true;
                break;
            }
        }
    } while (maSach.trim() === "" || trungLap);

    let tenSach = "";
    while (tenSach.trim() === "") {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    }

    let theLoai = "";
    while (theLoai.trim() === "") {
        theLoai = prompt("Nhập các thể loại của sách thứ " + (i + 1) + " (cách nhau bởi dấu phẩy):");
    }

    let tonKho = -1;
    while (tonKho < 0 || isNaN(tonKho)) {
        tonKho = parseInt(prompt("Nhập số lượng tồn kho của sách thứ " + (i + 1) + ":"));
    }

    booksId.push(maSach);
    booksName.push(tenSach);
    booksCategory.push(theLoai);
    inventoryQuantity.push(tonKho);
}

let demLapTrinh = 0;
for (let i = 0; i < booksCategory.length; i++) {
    if (booksCategory[i].toLowerCase().includes("lập trình")) {
        demLapTrinh++;
    }
}

console.log("Tổng số sách thuộc thể loại 'Lập trình': " + demLapTrinh);

console.log("Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':");
for (let i = 0; i < booksCategory.length; i++) {
    let cat = booksCategory[i].toLowerCase();
    if (cat.includes("javascript") && cat.includes("web")) {
        console.log(booksId[i]);
    }
}

let viTriMin = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
    if (inventoryQuantity[i] < inventoryQuantity[viTriMin]) {
        viTriMin = i;
    }
}

console.log("Loại sách có số lượng tồn kho thấp nhất:");
console.log(
    "Mã sách: " + booksId[viTriMin] +
    ", Tên sách: " + booksName[viTriMin] +
    ", Tồn kho: " + inventoryQuantity[viTriMin]
);
