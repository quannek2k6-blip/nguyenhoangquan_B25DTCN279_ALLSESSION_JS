const form = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const sortAscBtn = document.getElementById("sort-asc");
const sortDescBtn = document.getElementById("sort-desc");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = productNameInput.value.trim();
    const price = productPriceInput.value.trim();

    if (name === "" || price === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const li = document.createElement("li");
    li.className = "product-item";
    li.setAttribute("data-price", Number(price));

    li.innerHTML = `
        <span class="product-info">
            <strong class="product-name">${name}</strong> - 
            <span class="product-price">${Number(price).toLocaleString()} VND</span>
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
            li.setAttribute("data-price", Number(newPrice));
            priceSpan.textContent = Number(newPrice).toLocaleString() + " VND";
        }
    }
});

searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".product-item");

    items.forEach(function (item) {
        const name = item.querySelector(".product-name").textContent.toLowerCase();

        if (name.includes(keyword)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});

sortAscBtn.addEventListener("click", function () {
    sortProducts(true);
});

sortDescBtn.addEventListener("click", function () {
    sortProducts(false);
});

function sortProducts(isAscending) {
    const items = Array.from(document.querySelectorAll(".product-item"));

    items.sort(function (a, b) {
        const priceA = Number(a.getAttribute("data-price"));
        const priceB = Number(b.getAttribute("data-price"));

        return isAscending ? priceA - priceB : priceB - priceA;
    });

    productList.innerHTML = "";
    items.forEach(function (item) {
        productList.appendChild(item);
    });
}