let n = parseInt(prompt("Nhập số phần tử của mảng"));

if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập ký tự thứ " + (i + 1));
    }

    let tong = 0;
    let coSo = false;

    for (let i = 0; i < arr.length; i++) {
        let giaTri = parseInt(arr[i]);
        if (!isNaN(giaTri)) {
            tong += giaTri;
            coSo = true;
        }
    }

    if (coSo) {
        console.log(tong);
    } else {
        console.log("Không có phần tử nào là số");
    }
}
