let n = parseInt(prompt("Nhập số phần tử của mảng"));

if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseFloat(prompt("Nhập phần tử thứ " + (i + 1)));
    }

    let dem = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 && Number.isInteger(arr[i])) {
            dem++;
        }
    }

    console.log(dem);
}
