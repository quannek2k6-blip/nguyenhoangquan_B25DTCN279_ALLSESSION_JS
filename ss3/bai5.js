let totalRequests = 0
let successCount = 0
let rejectCount = 0
let pendingCount = 0

while (true) {
  let cont = prompt("Có yêu cầu đặt mượn trước mới không? (có/không)")
  if (cont === null || cont.toLowerCase() === "không") break
  if (cont.toLowerCase() !== "có") continue

  let readerName = prompt("Nhập tên bạn đọc:")
  let bookCode = prompt("Nhập mã sách muốn đặt trước:")
  let bookName = prompt("Nhập tên sách:")
  let waitDays
  while (true) {
    waitDays = Number(prompt("Nhập số ngày dự kiến chờ (≥ 1):"))
    if (!isNaN(waitDays) && waitDays >= 1) break
  }

  let priority
  while (true) {
    priority = Number(prompt("Nhập ưu tiên (1-SV, 2-GV/NCS, 3-Đặc cách):"))
    if (priority === 1 || priority === 2 || priority === 3) break
  }

  totalRequests++

  if (waitDays > 45) {
    rejectCount++
    console.log("Từ chối: Thời gian chờ quá lâu (>45 ngày)")
  } else if (priority === 3) {
    successCount++
    console.log("Đặt trước thành công - Ưu tiên đặc cách cao nhất")
  } else if (priority === 2 && waitDays <= 30) {
    successCount++
    console.log("Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu")
  } else if (priority === 1 && waitDays <= 21) {
    successCount++
    console.log("Đặt trước thành công")
  } else {
    pendingCount++
    console.log("Đặt trước tạm thời - Chờ xét duyệt thêm")
  }
}

console.log("Tổng số yêu cầu đã xử lý: " + totalRequests)
console.log("Số yêu cầu đặt trước thành công: " + successCount)
console.log("Số yêu cầu bị từ chối: " + rejectCount)
console.log("Số yêu cầu chờ xét duyệt: " + pendingCount)
