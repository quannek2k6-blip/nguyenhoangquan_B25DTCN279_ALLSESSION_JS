let totalBooks = 0
let lostBooks = 0
let outOfStockBooks = 0
let highStockBooks = 0
let normalStockBooks = 0

while (true) {
  let cont = prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)")
  if (cont === null || cont.toLowerCase() === "không") break
  if (cont.toLowerCase() !== "có") continue

  let bookCode = ""
  while (bookCode.trim() === "") {
    bookCode = prompt("Nhập mã sách:")
  }

  let bookName = prompt("Nhập tên sách:")

  let quantity
  while (true) {
    quantity = Number(prompt("Nhập số lượng thực tế trong kho (≥ 0):"))
    if (!isNaN(quantity) && quantity >= 0) break
  }

  let status
  while (true) {
    status = Number(prompt("Nhập tình trạng sách (1-Bình thường, 2-Mất):"))
    if (status === 1 || status === 2) break
  }

  totalBooks++

  if (status === 2) {
    lostBooks++
  } else if (status === 1 && quantity === 0) {
    outOfStockBooks++
  } else if (status === 1 && quantity >= 10) {
    highStockBooks++
  } else if (status === 1 && quantity >= 1 && quantity <= 9) {
    normalStockBooks++
  }
}

console.log("Tổng số sách đã kiểm kê: " + totalBooks + " cuốn")
console.log("Số sách mất: " + lostBooks + " cuốn")
console.log("Số sách hết hàng: " + outOfStockBooks + " cuốn")
console.log("Số sách tồn kho nhiều: " + highStockBooks + " cuốn")
console.log("Số sách tồn kho bình thường: " + normalStockBooks + " cuốn")
