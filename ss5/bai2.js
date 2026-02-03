let sachTraMuon = [];

let soLuong = parseInt(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?"));

for (let i = 0; i < soLuong; i++) {
    let tenSach = prompt("Nhập tên cuốn sách bị trả muộn thứ " + (i + 1) + ":");
    sachTraMuon.push(tenSach);
}

console.log("Tổng số sách bị trả muộn: " + sachTraMuon.length);
console.log("Danh sách sách bị trả muộn:");

for (let i = 0; i < sachTraMuon.length; i++) {
    console.log((i + 1) + ". " + sachTraMuon[i]);
}

let dem = 0;
for (let i = 0; i < sachTraMuon.length; i++) {
    if (sachTraMuon[i].length > 20) {
        dem++;
    }
}

console.log("Số lượng sách có tên dài hơn 20 ký tự: " + dem);
