let n = parseInt(prompt("Nhập số phần tử của mảng"));

if (n === 0) {
    console.log("Không có ký tự số");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập ký tự thứ " + (i + 1));
    }

    let ketQua = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= '0' && arr[i] <= '9') {
            ketQua.push(arr[i]);
        }
    }

    if (ketQua.length > 0) {
        console.log(ketQua.join(" "));
    } else {
        console.log("Không có ký tự số");
    }
}
