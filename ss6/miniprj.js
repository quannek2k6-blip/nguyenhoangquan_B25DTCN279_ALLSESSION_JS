let maxLogin = 3;
let loggedIn = false;

while (maxLogin > 0) {
    let user = prompt("Nhập tài khoản:");
    let pass = prompt("Nhập mật khẩu:");

    if (user === "admin" && pass === "12345") {
        loggedIn = true;
        break;
    } else {
        maxLogin--;
        alert("Sai tài khoản hoặc mật khẩu. Còn " + maxLogin + " lần");
    }
}

if (!loggedIn) {
    alert("Tài khoản đã bị khóa");
} else {
    let libraries = ["Toán", "Văn", "Anh"];

    while (true) {
        let choice = prompt(
`================== MENU ===================
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
===========================================
Lựa chọn của bạn:`);

        if (choice === "7") {
            console.log("Hẹn gặp lại!");
            break;
        }

        switch (choice) {
            case "1":
                let inputBooks = prompt("Nhập tên các sách (phân cách bằng dấu phẩy)");
                if (inputBooks) {
                    let newBooks = inputBooks.split(",");
                    let count = 0;
                    for (let i = 0; i < newBooks.length; i++) {
                        let book = newBooks[i].trim();
                        if (book !== "") {
                            libraries.push(book);
                            count++;
                        }
                    }
                    console.log("Đã thêm " + count + " sách vào kho");
                }
                break;

            case "2":
                if (libraries.length === 0) {
                    console.log("Kho sách trống");
                } else {
                    for (let i = 0; i < libraries.length; i++) {
                        console.log((i + 1) + ". " + libraries[i]);
                    }
                }
                break;

            case "3":
                let searchBook = prompt("Nhập tên sách cần tìm");
                let foundIndex = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i] === searchBook) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    console.log("Sách " + searchBook + " được tìm thấy tại vị trí " + foundIndex);
                } else {
                    console.log("Không tìm thấy");
                }
                break;

            case "4":
                let oldName = prompt("Nhập tên sách cần sửa");
                let indexUpdate = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i] === oldName) {
                        indexUpdate = i;
                        break;
                    }
                }
                if (indexUpdate !== -1) {
                    let newName = prompt("Nhập tên sách mới");
                    libraries[indexUpdate] = newName;
                    console.log("Cập nhật sách thành công");
                } else {
                    console.log("Sách không tồn tại");
                }
                break;

            case "5":
                libraries.reverse();
                for (let i = 0; i < libraries.length; i++) {
                    console.log(i + ": " + libraries[i]);
                }
                break;

            case "6":
                let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
                for (let i = 0; i < otherBranch.length; i++) {
                    libraries.push(otherBranch[i]);
                }
                console.log("Đã gộp kho sách thành công");
                break;

            default:
                console.log("Lựa chọn không hợp lệ");
        }
    }
}
