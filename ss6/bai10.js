let arr = [];

while (true) {
    let choice = prompt(
`================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng
5. In ra các số nguyên tố trong mảng và tính tổng
6. Nhập một số và đếm số lần xuất hiện trong mảng
7. Thêm một phần tử vào vị trí chỉ định
8. Xóa một phần tử theo giá trị
9. Sắp xếp mảng tăng dần hoặc giảm dần
0. Thoát
============================================
Lựa chọn của bạn:`);

    if (choice === "0") {
        console.log("Thoát chương trình");
        break;
    }

    switch (choice) {

        case "1":
            let n = parseInt(prompt("Nhập số phần tử"));
            if (n <= 0) {
                console.log("Số lượng không hợp lệ");
                break;
            }

            arr = [];
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt("Nhập phần tử thứ " + (i + 1))));
            }
            break;

        case "2":
            if (arr.length === 0) console.log("Mảng rỗng");
            else console.log(arr);
            break;

        case "3":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
                break;
            }

            let evenArr = [];
            let sumEven = 0;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    evenArr.push(arr[i]);
                    sumEven += arr[i];
                }
            }

            evenArr.sort((a, b) => b - a);

            console.log("Số chẵn:", evenArr);
            console.log("Tổng:", sumEven);
            break;

        case "4":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
                break;
            }

            let max = arr[0];
            let min = arr[0];
            let maxIndex = 0;
            let minIndex = 0;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    maxIndex = i;
                }
                if (arr[i] < min) {
                    min = arr[i];
                    minIndex = i;
                }
            }

            console.log("Max:", max, "- Vị trí:", maxIndex);
            console.log("Min:", min, "- Vị trí:", minIndex);
            break;

        case "5":
            if (arr.length === 0) {
                console.log("Mảng rỗng");
                break;
            }

            let primeArr = [];
            let sumPrime = 0;

            for (let i = 0; i < arr.length; i++) {
                let num = arr[i];
                let isPrime = num > 1;

                for (let j = 2; j <= Math.sqrt(num); j++) {
                    if (num % j === 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime) {
                    primeArr.push(num);
                    sumPrime += num;
                }
            }

            console.log("Số nguyên tố:", primeArr);
            console.log("Tổng:", sumPrime);
            break;

        case "6":
            let x = parseInt(prompt("Nhập số cần đếm"));
            let count = 0;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === x) count++;
            }

            console.log("Số lần xuất hiện:", count);
            break;

        case "7":
            let value = parseInt(prompt("Nhập giá trị cần thêm"));
            let position = parseInt(prompt("Nhập vị trí thêm"));

            if (position < 0 || position > arr.length) {
                console.log("Vị trí không hợp lệ");
            } else {
                arr.splice(position, 0, value);
                console.log(arr);
            }
            break;

        case "8":
            let deleteValue = parseInt(prompt("Nhập giá trị cần xóa"));

            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== deleteValue) {
                    newArr.push(arr[i]);
                }
            }

            arr = newArr;
            console.log(arr);
            break;

        case "9":
            let type = prompt("1. Tăng dần\n2. Giảm dần");

            if (type === "1") {
                arr.sort((a, b) => a - b);
            } else if (type === "2") {
                arr.sort((a, b) => b - a);
            }

            console.log(arr);
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
}
