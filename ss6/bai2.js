let arr = [];
for (let i = 0; i < 10; i++) {
    let value = prompt("Nhập số nguyên thứ " + (i + 1));
    if (value === null || value === "") break;
    arr.push(parseInt(value));
}

if (arr.length === 0) {
    console.log("Không có số lớn nhất");
} else {
    let max = arr[0];
    let viTri = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            viTri = i;
        }
    }

    console.log("Số lớn nhất: " + max);
    console.log("Vị trí: " + viTri);
}
