let arr = ["", false, 0, 5, 10, "Hello world!"];

let ketQua = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        ketQua.push(arr[i]);
    }
}

console.log(ketQua);
