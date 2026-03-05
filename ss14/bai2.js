const form = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");

form.addEventListener("submit", function(event) {
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
        <strong>${newProduct.name}</strong> - 
        ${newProduct.price.toLocaleString()} VND
    `;

    productList.appendChild(li);

    productNameInput.value = "";
    productPriceInput.value = "";
});