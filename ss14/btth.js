const products = [
    { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000, img: "./img/banhchung.webp" },
    { id: 2, name: "Giò Lụa Ước Lễ", price: 180000, img: "./img/giolua.jpg" },
    { id: 3, name: "Cành Đào Nhật Tân", price: 500000, img: "./img/canhdao.webp" },
    { id: 4, name: "Mứt Tết Thập Cẩm", price: 120000, img: "./img/muttet.webp" },
    { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "./img/lixi.webp" },
    { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "./img/duahau.jpg" }
];
function rederproduct(){
    let str=``;
    for (let i=0;i<productListDOM.clientHeight;i++){
        str+=`
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${formatMoney(product.price)}</p>
            <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
        `;
    }
    document.getelementbyid("product-lít").innerhtml=str;
}
renderProducts();
function rendercart(){
    let str="";
        for (let i=0;i<cart.length;i++){
            str+=`
        <span class="cart-item-name">${product.name}</span>
        <div>
            <span class="cart-item-price">${formatMoney(product.price)}</span>
            <button class="btn-remove">X</button>
        </div>`
        }
        document.geteleementsbyid("card-list").innerHTML = str
}
rendercart();
function addtocart(){
    console.log("thông tin sản phẩm",product[index]);
    cart.push(product[index]);
    rendercart();
}