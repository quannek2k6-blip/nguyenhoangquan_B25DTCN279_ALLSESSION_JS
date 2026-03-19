const products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image:
      "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image:
      "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image:
      "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];
let cart = [];
const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});
function renderProducts() {
  const productsGrid = document.getElementById("products-grid");
  let str = "";
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    str += `
      <div class="card">
        <div class="card-img"><img src="${product.image}"></div>
        <div class="card-body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="card-footer">
            <span class="price">${formatter.format(product.price)}</span>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    `;
  }
  productsGrid.innerHTML = str;
}
function addToCart(productId) {
  let product = products.find(p => p.id === productId);
  let cartItem = cart.find(item => item.id === productId);
  if(cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }
  saveToLocalStorage(); 
}
function renderCart() {
  const cartTbody = document.getElementById("cart-tbody");
  const cartEmpty = document.getElementById("cart-empty");
  if(cart.length === 0) {
    cartEmpty.style.display = "block";
    cartTbody.innerHTML = ""; 
    updateStats(); 
  } else {
    cartEmpty.style.display = "none";
    let str = "";
      let totalMoney = 0;
      let totalQuantity = 0;
      for(let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let subtotal = item.price * item.quantity;
        totalMoney += subtotal;
        totalQuantity += item.quantity;
        str += `
          <tr>
            <td>${item.name}</td>
            <td>${formatter.format(item.price)}</td>
            <td>
              <button onclick="updateQuantity(${item.id}, -1)">-</button>
              <strong>${item.quantity}</strong>
              <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </td>
            <td>${formatter.format(subtotal)}</td>
            <td>
              <button onclick="removeItem(${item.id})">Xóa</button>
            </td>
          </tr>
        `;
      }
      cartTbody.innerHTML = str;
      updateStats();
  }
}
function updateQuantity(productId, change) {
  let item = cart.find(i => i.id === productId);
  if(item) {
    item.quantity += change;
    if(item.quantity <= 0) {
      cart = cart.filter(it => it.id !== productId);
    }
  }
  saveToLocalStorage();
}
function removeItem(productId) {
  let item = cart.find(i => i.id === productId);
  if(confirm(`Bạn có chắc chắn muốn xóa sản phẩm ${item.name}?`)) {
    cart = cart.filter(i => i.id !== productId);
    saveToLocalStorage();
  }
}
function clearAllCart() {
  let confirmed = confirm("Bạn có chắc chắn muốn xóa TOÀN BỘ giỏ hàng không?");
  if(confirmed) {
    cart = [];
    saveToLocalStorage();
    alert("Đã xóa toàn bộ giỏ hàng!");
  }
}
document.getElementById("clear-cart-btn").onclick = clearAllCart;
function updateStats() {
  let totalLines = cart.length; 
  let totalQuantity = 0;        
  let totalMoney = 0;           
  for(let i = 0; i < cart.length; i++) {
    let item = cart[i];
    totalQuantity += item.quantity;
    totalMoney += (item.price * item.quantity);
  }
  document.getElementById("stat-lines").innerText = totalLines;
  document.getElementById("stat-qty").innerText = totalQuantity;
  document.getElementById("stat-total").innerText = formatter.format(totalMoney);
  document.getElementById("cart-lines-badge").innerText = totalLines + " dòng";
  document.getElementById("cart-qty-badge").innerText = totalQuantity + " món";
}
function saveToLocalStorage() {
  localStorage.setItem("myCart", JSON.stringify(cart));
  renderCart();
}
function loadCart() {
  try {
    let data = localStorage.getItem("myCart");
    if(data) {
      cart = JSON.parse(data);
    }
  } catch (err) {
    cart = [];
  }
  renderCart();
}
renderProducts();
loadCart();