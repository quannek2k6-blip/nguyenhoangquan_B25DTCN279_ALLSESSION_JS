let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let choice;

do {
    choice = parseInt(prompt(
        "--- THƯ VIỆN KHOA HỌC ---\n" +
        "1. Xem danh sách\n" +
        "2. Nhập sách mới\n" +
        "3. Mượn sách (Xóa)\n" +
        "4. Sửa tên sách\n" +
        "5. Sắp xếp kệ\n" +
        "0. Thoát\n\n" +
        "Bạn chọn:"
    ));

    if (choice === 1) {
        console.log("Danh sách hiện tại (" + books.length + " cuốn):");
        for (let i = 0; i < books.length; i++) {
            console.log((i + 1) + ". " + books[i]);
        }
    }

    if (choice === 2) {
        let tenSachMoi = prompt("Nhập tên sách mới:");
        if (tenSachMoi && tenSachMoi.trim() !== "") {
            books.push(tenSachMoi);
            console.log("Đã thêm thành công!");
        }
    }

    if (choice === 3) {
        let tenMuon = prompt("Nhập tên sách muốn mượn:");
        let index = books.indexOf(tenMuon);

        if (index === -1) {
            console.log("Lỗi: Không tìm thấy sách " + tenMuon + "!");
        } else {
            books.splice(index, 1);
            console.log("Đã cho mượn cuốn '" + tenMuon + "'.");
        }
    }

    if (choice === 4) {
        let tenCu = prompt("Nhập tên sách cũ cần sửa:");
        let index = books.indexOf(tenCu);

        if (index === -1) {
            console.log("Không tìm thấy sách cần sửa!");
        } else {
            let tenMoi = prompt("Nhập tên sách mới:");
            if (tenMoi && tenMoi.trim() !== "") {
                books[index] = tenMoi;
                console.log("Đã cập nhật tên sách!");
            }
        }
    }

    if (choice === 5) {
        books.sort();
        console.log("Danh sách sau khi sắp xếp:");
        for (let i = 0; i < books.length; i++) {
            console.log((i + 1) + ". " + books[i]);
        }
    }

} while (choice !== 0);
