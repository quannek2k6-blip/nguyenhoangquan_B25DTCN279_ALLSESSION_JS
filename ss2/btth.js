let userName = prompt("Nhập tên người dùng:");
let role = prompt("Nhập vai trò (admin / student / guest):");
let balance = Number(prompt("Nhập số dư tài khoản thẻ:"));
let cardStatusInput = prompt("Trạng thái thẻ thư viện (true nếu hoạt động):");
let overdueDays = Number(prompt("Nhập số ngày quá hạn trả sách:"));
role = role ? role.toLowerCase() : "";
let cardStatus = cardStatusInput === "true";
let roleMessage = "";
let borrowResult = "";
let fine = 0;
let returnStatus = "";

if (role === "admin") {
    roleMessage = "Chào Admin, bạn có toàn quyền hệ thống";
} else if (role === "student") {
    roleMessage = "Chào sinh viên, bạn có thể mượn sách";
} else if (role === "guest") {
    roleMessage = "Chào khách, bạn chỉ có thể đọc tại chỗ";
} else {
    roleMessage = "Lỗi: Vai trò không hợp lệ!";
}
if (
    userName &&
    (role === "admin" || role === "student") &&
    balance > 0 &&
    cardStatus === true
) {
    borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
} else {
    borrowResult = "YÊU CẦU BỊ TỪ CHỐI";
}
if (overdueDays <= 0) {
    returnStatus = "Cảm ơn bạn đã trả đúng hạn";
    fine = 0;
} else if (overdueDays >= 1 && overdueDays <= 5) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fine = overdueDays * 5000;
} else if (overdueDays >= 6 && overdueDays <= 10) {
    returnStatus = `Quá hạn ${overdueDays} ngày`;
    fine = overdueDays * 10000;
} else {
    returnStatus = `Quá hạn ${overdueDays} ngày - TÀI KHOẢN BỊ KHÓA`;
    fine = 200000;
}
console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
Người dùng: ${userName ? userName.toUpperCase() : "KHÔNG XÁC ĐỊNH"}
Quyền hạn: ${roleMessage}
Kết quả mượn: ${borrowResult}
Tình trạng trả sách: ${returnStatus}
Tiền phạt: ${fine} VNĐ
`);
