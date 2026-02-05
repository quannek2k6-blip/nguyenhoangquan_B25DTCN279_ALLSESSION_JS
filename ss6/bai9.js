let arr = [];

while (true) {
    let luaChon = prompt(
`================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
===========================================
Lựa chọn của bạn:`);

    if (luaChon === "8") {
        console.log("Đã thoát chương trình");
        break;
    }

    switch (luaChon) {
        case "1":
            let n = parseInt(prompt("Nhập số phần tử"));
            if (n <= 0) {
                console.log("Số lượng phần tử không hợp lệ");
                break;
            }
            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
            }
            break;

        case "2":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                console.log(arr);
            }
            break;

        case "3":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let tongChan = 0;
                let dsChan = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        dsChan.push(arr[i]);
                        tongChan += arr[i];
                    }
                }
                console.log(dsChan);
                console.log("Tổng: " + tongChan);
            }
            break;

        case "4":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let max = arr[0];
                let min = arr[0];
                for (let i = 1; i < arr.length; i++) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                }
                console.log("Max: " + max);
                console.log("Min: " + min);
            }
            break;

        case "5":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let tongNT = 0;
                let dsNT = [];
                for (let i = 0; i < arr.length; i++) {
                    let so = arr[i];
                    let laNT = so > 1;
                    for (let j = 2; j <= Math.sqrt(so); j++) {
                        if (so % j === 0) {
                            laNT = false;
                            break;
                        }
                    }
                    if (laNT) {
                        dsNT.push(so);
                        tongNT += so;
                    }
                }
                console.log(dsNT);
                console.log("Tổng: " + tongNT);
            }
            break;

        case "6":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
            } else {
                let x = parseInt(prompt("Nhập số cần thống kê"));
                let dem = 0;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === x) dem++;
                }
                console.log("Số lần xuất hiện: " + dem);
            }
            break;

        case "7":
            let giaTri = parseInt(prompt("Nhập giá trị cần thêm"));
            let viTri = parseInt(prompt("Nhập vị trí cần thêm"));
            if (viTri < 0 || viTri > arr.length) {
                console.log("Vị trí không hợp lệ");
            } else {
                arr.splice(viTri, 0, giaTri);
                console.log(arr);
            }
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
}
