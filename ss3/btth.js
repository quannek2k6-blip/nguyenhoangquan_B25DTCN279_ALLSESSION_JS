let attempts = 0
let loggedIn = false

while (attempts < 3) {
  let password = prompt("Nhập mật khẩu:")
  if (password === "admin123") {
    console.log("Đăng nhập thành công")
    loggedIn = true
    break
  } else {
    attempts++
    console.log("Mật khẩu sai")
  }
}

if (!loggedIn) {
  console.log("Hệ thống bị khóa")
} else {
  while (true) {
    let choice = prompt(
      "MENU\n1. Nhập lô sách mới\n2. Vẽ sơ đồ kệ sách\n3. Thoát\nChọn chức năng (1-3):",
    )

    if (choice === "1") {
      let n = Number(prompt("Bạn muốn nhập bao nhiêu cuốn sách?"))
      let total = 0

      for (let i = 1; i <= n; i++) {
        let price = Number(prompt("Nhập giá tiền cuốn sách thứ " + i))
        if (price <= 0 || isNaN(price)) {
          console.log("Giá không hợp lệ, bỏ qua")
          continue
        }
        total += price
      }

      console.log("Tổng giá trị nhập kho đợt này là: " + total)
    } else if (choice === "2") {
      for (let area = 1; area <= 3; area++) {
        for (let shelf = 1; shelf <= 5; shelf++) {
          if (area === 2 && shelf === 3) {
            console.log("Khu vực 2 - Kệ 3 (Đang sửa chữa)")
            continue
          }
          console.log("Khu vực " + area + " - Kệ " + shelf)
        }
      }
    } else if (choice === "3") {
      console.log("Hẹn gặp lại!")
      break
    } else {
      console.log("Lựa chọn không hợp lệ")
    }
  }
}
