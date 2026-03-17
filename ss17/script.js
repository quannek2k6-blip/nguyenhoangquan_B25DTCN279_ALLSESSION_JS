// let products = [
//   { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000, img: "./img/banhchung.webp"},
//   { id: 2, name: "Giò Lụa Ước Lễ", price: 180000, img: "./img/giolua.jpg"},
//   { id: 3, name: "Cành Đào Nhật Tân", price: 500000, img: "./img/canhdao.webp"},
//   { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000, img: "./img/muttet.webp"},
//   { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "./img/lixi.webp"},
//   { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "./img/duahau.jpg"},
// ];
let products = JSON.parse(localStorage.getItem("products")) || [];
function renderProducts() {
  let str = "";
  for (let i = 0; i < products.length; i++) {
    str += `
        <div class="product-card">
            <img src=${products[i].img} alt="">
            <h3>${products[i].name}</h3>
            <p class="price">${products[i].price}</p>
            <button class="btn-add" id="btn-add-${products.id}">Thêm vào giỏ</button>
        </div>
        `;
  }
  document.getElementById("product-list").innerHTML = str;
}
renderProducts();

// localStorage.setItem("products", JSON.stringify(products))
