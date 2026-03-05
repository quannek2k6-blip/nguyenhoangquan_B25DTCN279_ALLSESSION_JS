const form = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = productNameInput.value.trim();
    const price = productPriceInput.value.trim();

    if (name === "" || price === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: name,
        price: Number(price)
    };

    const li = document.createElement("li");
    li.className = "product-item";

    li.innerHTML = `
        <span class="product-info">
            <strong>${newProduct.name}</strong> - 
            <span class="product-price">${newProduct.price.toLocaleString()} VND</span>
        </span>
        <button class="edit-price-btn">Sửa giá</button>
        <button class="delete-btn">Xóa</button>
    `;

    productList.appendChild(li);

    productNameInput.value = "";
    productPriceInput.value = "";
});

productList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (confirmDelete) {
            const li = event.target.closest(".product-item");
            li.remove();
        }
    }

    if (event.target.classList.contains("edit-price-btn")) {
        const li = event.target.closest(".product-item");
        const priceSpan = li.querySelector(".product-price");

        const newPrice = prompt("Nhập giá mới (VND):");

        if (newPrice !== null && newPrice.trim() !== "" && !isNaN(newPrice)) {
            const formattedPrice = Number(newPrice).toLocaleString();
            priceSpan.textContent = formattedPrice + " VND";
        }
    }
});