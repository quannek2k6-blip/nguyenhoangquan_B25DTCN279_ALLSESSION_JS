const USERNAME = "admin";
const PASSWORD = "12345";
let loginCount = 0;
let isLogin = false;
while (loginCount < 3) {
    let inputUser = prompt("Nhập tài khoản:");
    let inputPass = prompt("Nhập mật khẩu:");
    if (inputUser !== USERNAME) {
        alert("Sai tài khoản");
    } else if (inputPass !== PASSWORD) {
        alert("Sai mật khẩu");
    } else {
        alert("Đăng nhập thành công!");
        isLogin = true;
        break;
    }
    loginCount++;
}
if (!isLogin) {
    alert("Tài khoản đã bị khóa");
} else {
    let choice;
    do {
        choice = prompt(
            "1. Phân loại mã số sách\n" +
            "2. Thiết kế sơ đồ kho sách\n" +
            "3. Dự toán phí bảo trì sách\n" +
            "4. Tìm mã số sách may mắn\n" +
            "5. Thoát\n" +
            "Chọn chức năng (1-5):"
        );
        switch (choice) {
            case "1": {
                let total = 0;
                let evenCount = 0;
                let oddCount = 0;
                while (true) {
                    let code = Number(prompt("Nhập mã sách (0 để kết thúc):"));
                    if (code === 0) break;
                    if (!Number.isInteger(code)) continue;
                    total++;
                    if (code % 2 === 0) evenCount++;
                    else oddCount++;
                }
                alert(
                    "Tổng mã sách: " + total +
                    "\nSách khoa học: " + evenCount +
                    "\nSách nghệ thuật: " + oddCount
                );
                break;
            }
            case "2": {
                let rows = Number(prompt("Nhập số Hàng:"));
                let cols = Number(prompt("Nhập số Cột:"));
                for (let i = 1; i <= rows; i++) {
                    for (let j = 1; j <= cols; j++) {
                        if (i === j) console.log(`[${i}-${j}] (Kệ ưu tiên)`);
                        else console.log(`[${i}-${j}]`);
                    }
                }
                break;
            }
            case "3": {
                let bookCount = Number(prompt("Nhập số lượng sách:"));
                let baseCost = Number(prompt("Nhập phí bảo trì 1 cuốn:"));
                let years = Number(prompt("Nhập số năm dự toán:"));
                let costPerBook = baseCost;
                for (let year = 1; year <= years; year++) {
                    let totalCost = bookCount * costPerBook;
                    console.log(
                        "Năm " + year +
                        ": Đơn giá = " + costPerBook.toFixed(2) +
                        " | Tổng phí = " + totalCost.toFixed(2)
                    );
                    costPerBook *= 1.1;
                }
                break;
            }
            case "4": {
                let N = Number(prompt("Nhập số giới hạn N:"));
                let count = 0;
                let result = "";
                for (let i = 1; i <= N; i++) {
                    if (i % 3 === 0 && i % 5 !== 0) {
                        result += i + " ";
                        count++;
                    }
                }
                console.log(result);
                console.log(count);
                break;
            }
            case "5":
                alert("Hệ thống đang đăng xuất...");
                break;

            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== "5");
}
