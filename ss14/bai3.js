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
        <span>
            <strong>${newProduct.name}</strong> - 
            ${newProduct.price.toLocaleString()} VND
        </span>
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
});