function recordDailyBorrows() {
  let totalBorrows = Number(
    prompt("Hôm nay có bao nhiêu lượt mượn sách?")
  );
  if (isNaN(totalBorrows) || totalBorrows <= 0) {
    alert("Số lượt mượn phải là số nguyên dương!");
    return;
  }
  let validBorrows = 0;
  for (let i = 1; i <= totalBorrows; i++) {
    alert(`Nhập thông tin lượt mượn thứ ${i}`);
    let borrowerName = prompt("Nhập tên người mượn:");
    let bookName = prompt("Nhập tên sách:");
    let borrowDays = Number(prompt("Nhập số ngày mượn (1–30):"));
    if (isNaN(borrowDays) || borrowDays < 1 || borrowDays > 30) {
      alert("Số ngày mượn không hợp lệ!");
      continue;
    }
    console.log(`Lượt ${i}:`);
    console.log(`- Người mượn: ${borrowerName}`);
    console.log(`- Tên sách: ${bookName}`);
    console.log(`- Số ngày mượn: ${borrowDays}`);
    if (borrowDays > 14) {
      console.log(
        "⚠️ Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)"
      );
    } else {
      console.log("✅ Mượn thành công");
      validBorrows++;
    }
    console.log("-------------------------");
  }
  console.log("=== THỐNG KÊ CUỐI NGÀY ===");
  console.log(`Tổng số lượt mượn: ${totalBorrows}`);
  console.log(`Số lượt mượn hợp lệ: ${validBorrows}`);

  alert("Đã hoàn tất ghi nhận lượt mượn. Xem chi tiết tại Console (F12).");
}
recordDailyBorrows();
