let successCount = 0
let failCount = 0

while (true) {
  let hasRequest = prompt("Có yêu cầu gia hạn mới không? (có/không)")

  if (hasRequest === null || hasRequest.toLowerCase() === "không") break
  if (hasRequest.toLowerCase() !== "có") continue

  let readerName = prompt("Nhập tên bạn đọc:")
  let bookName = prompt("Nhập tên sách:")

  let borrowedDays
  while (true) {
    borrowedDays = Number(prompt("Nhập số ngày đã mượn hiện tại (≥ 1):"))
    if (!isNaN(borrowedDays) && borrowedDays >= 1) break
  }

  let extendDays
  while (true) {
    extendDays = Number(prompt("Nhập số ngày muốn gia hạn thêm (≥ 1):"))
    if (!isNaN(extendDays) && extendDays >= 1) break
  }

  let totalDays = borrowedDays + extendDays

  if (totalDays > 60) {
    alert("Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa")
    failCount++
  } else if (borrowedDays > 45) {
    alert("Không được gia hạn: Đã mượn quá lâu (>45 ngày)")
    failCount++
  } else if (totalDays <= 30) {
    alert("Gia hạn thành công")
    successCount++
  } else {
    alert("Gia hạn thành công")
    successCount++
  }
}

console.log("Số lần gia hạn thành công: " + successCount)
console.log("Số lần gia hạn không thành công: " + failCount)
