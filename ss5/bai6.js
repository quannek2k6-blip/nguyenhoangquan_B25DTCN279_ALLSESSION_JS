let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

let soLuong = parseInt(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?"));

for (let i = 0; i < soLuong; i++) {
    let maThe = "";
    let trungLap;

    do {
        trungLap = false;
        maThe = prompt("Nhập mã thẻ bạn đọc thứ " + (i + 1) + ":");
        if (maThe.trim() === "") continue;

        for (let j = 0; j < readerCardIds.length; j++) {
            if (readerCardIds[j] === maThe) {
                trungLap = true;
                break;
            }
        }
    } while (maThe.trim() === "" || trungLap);

    let tenBanDoc = "";
    while (tenBanDoc.trim() === "") {
        tenBanDoc = prompt("Nhập tên bạn đọc thứ " + (i + 1) + ":");
    }

    let maSachMuon = "";
    while (maSachMuon.trim() === "") {
        maSachMuon = prompt("Nhập các mã sách đang mượn (cách nhau bởi dấu phẩy):");
    }

    let soNgay = -1;
    while (soNgay < 0 || isNaN(soNgay)) {
        soNgay = parseInt(prompt("Nhập số ngày quá hạn:"));
    }

    readerCardIds.push(maThe);
    readerNames.push(tenBanDoc);
    borrowedBookCodes.push(maSachMuon);
    overdueDays.push(soNgay);
}

let demQuaHan10 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 10) {
        demQuaHan10++;
    }
}
console.log("Tổng số bạn đọc quá hạn từ 10 ngày trở lên: " + demQuaHan10);

console.log("Mã thẻ bạn đọc mượn cả sách JS và PYT:");
for (let i = 0; i < borrowedBookCodes.length; i++) {
    let danhSachMa = borrowedBookCodes[i].split(",");
    let coJS = false;
    let coPYT = false;

    for (let j = 0; j < danhSachMa.length; j++) {
        if (danhSachMa[j].startsWith("JS")) coJS = true;
        if (danhSachMa[j].startsWith("PYT")) coPYT = true;
    }

    if (coJS && coPYT) {
        console.log(readerCardIds[i]);
    }
}

let viTriMax = 0;
for (let i = 1; i < overdueDays.length; i++) {
    if (overdueDays[i] > overdueDays[viTriMax]) {
        viTriMax = i;
    }
}
console.log("Bạn đọc quá hạn nhiều nhất: " + readerNames[viTriMax]);

let demQuaHan7 = 0;
for (let i = 0; i < overdueDays.length; i++) {
    if (overdueDays[i] >= 7) {
        demQuaHan7++;
    }
}

if (demQuaHan7 === 0) {
    console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (demQuaHan7 >= 1 && demQuaHan7 <= 4) {
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
