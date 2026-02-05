let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = parseInt(prompt("Nhập số nguyên thứ " + (i + 1)));
}

let ketQua = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
        ketQua.push(arr[i]);
    }
}

if (ketQua.length > 0) {
    console.log(ketQua.join(" "));
} else {
    console.log("Không có số nào lớn hơn 10");
}
