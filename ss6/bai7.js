let n = parseInt(prompt("Nhập số lượng phần tử của mảng"));

if (n < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = parseInt(prompt("Nhập phần tử thứ " + (i + 1)));
    }

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    let max2 = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            if (max2 === null || arr[i] > max2) {
                max2 = arr[i];
            }
        }
    }

    if (max2 === null) {
        console.log("Không tồn tại số lớn thứ hai");
    } else {
        console.log(max2);
    }
}
