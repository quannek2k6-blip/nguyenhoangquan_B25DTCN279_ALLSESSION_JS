let booksId = [];
let booksName = [];
let bookStatus = [];

let soLuong = parseInt(prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?"));

for (let i = 0; i < soLuong; i++) {
    let maSach = "";
    while (maSach.trim() === "") {
        maSach = prompt("Nhập mã sách thứ " + (i + 1) + ":");
    }

    let tenSach = "";
    while (tenSach.trim() === "") {
        tenSach = prompt("Nhập tên sách thứ " + (i + 1) + ":");
    }

    let chon = 0;
    while (chon < 1 || chon > 3) {
        chon = parseInt(prompt(
            "Nhập tình trạng ban đầu:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp"
        ));
    }

    let trangThai = "";
    if (chon === 1) trangThai = "Hỏng nhẹ";
    if (chon === 2) trangThai = "Hỏng nặng";
    if (chon === 3) trangThai = "Cần sửa gấp";

    booksId.push(maSach);
    booksName.push(tenSach);
    bookStatus.push(trangThai);
}

function inDanhSach() {
    console.log("Danh sách hiện tại:");
    for (let i = 0; i < booksId.length; i++) {
        console.log(
            (i + 1) + ". " +
            booksId[i] + " - " +
            booksName[i] + " - " +
            bookStatus[i]
        );
    }
}

inDanhSach();

let luaChon;
do {
    luaChon = parseInt(prompt(
        "Bạn muốn làm gì?\n1. Sửa tình trạng sách\n2. Loại bỏ sách\n0. Kết thúc"
    ));

    if (luaChon === 1) {
        let maCanSua = prompt("Nhập mã sách cần sửa:");
        let viTri = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === maCanSua) {
                viTri = i;
                break;
            }
        }

        if (viTri !== -1) {
            let chonMoi = 0;
            while (chonMoi < 1 || chonMoi > 5) {
                chonMoi = parseInt(prompt(
                    "Chọn tình trạng mới:\n1. Hỏng nhẹ\n2. Hỏng nặng\n3. Cần sửa gấp\n4. Đã sửa xong\n5. Loại bỏ"
                ));
            }

            if (chonMoi === 1) bookStatus[viTri] = "Hỏng nhẹ";
            if (chonMoi === 2) bookStatus[viTri] = "Hỏng nặng";
            if (chonMoi === 3) bookStatus[viTri] = "Cần sửa gấp";
            if (chonMoi === 4) bookStatus[viTri] = "Đã sửa xong";
            if (chonMoi === 5) bookStatus[viTri] = "Loại bỏ";
        }

        inDanhSach();
    }

    if (luaChon === 2) {
        let maCanXoa = prompt("Nhập mã sách cần xóa:");
        let viTri = -1;

        for (let i = 0; i < booksId.length; i++) {
            if (booksId[i] === maCanXoa) {
                viTri = i;
                break;
            }
        }

        if (viTri !== -1) {
            booksId.splice(viTri, 1);
            booksName.splice(viTri, 1);
            bookStatus.splice(viTri, 1);
        }

        inDanhSach();
    }

} while (luaChon !== 0);

let demDaSuaXong = 0;
let demLoaiBo = 0;

for (let i = 0; i < bookStatus.length; i++) {
    if (bookStatus[i] === "Đã sửa xong") demDaSuaXong++;
    if (bookStatus[i] === "Loại bỏ") demLoaiBo++;
}

console.log("BÁO CÁO CUỐI");
console.log("Tổng số sách còn lại: " + booksId.length);
console.log("Số sách đã sửa xong: " + demDaSuaXong);
console.log("Số sách loại bỏ: " + demLoaiBo);

if (booksId.length > 0) {
    console.log("Danh sách sách còn lại:");
    inDanhSach();
}
