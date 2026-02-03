let danhSachSachTra = [];

let soLuong = parseInt(prompt("Bạn muốn trả bao nhiêu cuốn sách?"));

for (let i = 0; i < soLuong; i++) {
    let tenSach = prompt("Nhập tên cuốn sách thứ " + (i + 1) + ":");
    danhSachSachTra.push(tenSach);
}

console.log("Tổng số sách đã được trả: " + danhSachSachTra.length);
console.log("Danh sách sách đã trả:");

for (let i = 0; i < danhSachSachTra.length; i++) {
    console.log((i + 1) + ". " + danhSachSachTra[i]);
}
