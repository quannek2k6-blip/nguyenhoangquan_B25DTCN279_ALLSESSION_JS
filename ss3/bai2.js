function checkReturnedBooks() {
  let totalReturns = Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"))

  if (isNaN(totalReturns) || totalReturns <= 0) {
    alert("Số lượt trả phải là số nguyên dương!")
    return
  }

  let lateReturns = 0

  for (let i = 1; i <= totalReturns; i++) {
    alert("Nhập thông tin lượt trả thứ " + i)

    let returnerName = prompt("Nhập tên người trả:")
    let bookName = prompt("Nhập tên sách:")
    let borrowedDays

    while (true) {
      borrowedDays = Number(prompt("Nhập số ngày đã mượn thực tế (≥ 1):"))
      if (!isNaN(borrowedDays) && borrowedDays >= 1) break
      alert("Số ngày mượn không hợp lệ! Vui lòng nhập lại.")
    }

    console.log("Lượt trả " + i + ":")
    console.log("Người trả: " + returnerName)
    console.log("Tên sách: " + bookName)
    console.log("Số ngày đã mượn: " + borrowedDays)

    if (borrowedDays <= 14) {
      console.log("Trả đúng hạn")
    } else if (borrowedDays <= 21) {
      console.log("Trả muộn nhẹ")
      console.log("Phạt nhắc nhở")
      lateReturns++
    } else {
      console.log("Quá hạn nghiêm trọng")
      console.log("Cần ghi biên bản phạt")
      lateReturns++
    }

    console.log("--------------------")
  }

  console.log("Tổng số lượt trả sách: " + totalReturns)
  console.log("Số lượt trả muộn (≥ 15 ngày): " + lateReturns)

  alert("Đã hoàn tất kiểm tra trả sách. Xem kết quả tại Console (F12).")
}

checkReturnedBooks()
