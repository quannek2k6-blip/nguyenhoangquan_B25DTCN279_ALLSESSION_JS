let names = ["iPhone 15", "Samsung S23", "Oppo Reno", "Xiaomi 13", "Nokia C20"];
let prices = [1200, 900, 450, 600, 80];
let stocks = [10, 5, 0, 8, 15];
let choice;
do {
    choice = +prompt(
        "--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---\n" +
        "1. Lọc sản phẩm cao cấp (>500)\n" +
        "2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)\n" +
        "3. Phân tích giá trị vốn hóa (Tổng tài sản)\n" +
        "4. Triển khai chiến dịch chiết khấu (Giảm 10%)\n" +
        "5. Truy vấn sản phẩm theo từ khóa\n" +
        "6. Báo cáo tình trạng tồn kho\n" +
        "7. Thoát chương trình\n" +
        "\n" +
        "Vui lòng nhập lựa chọn của bạn (1-7):"
    );
    switch (choice) {
        case 1:
            let filterPremiumProducts = names.filter((name, index) => {
                return prices[index] > 500;
            });
            alert("Danh sách sản phẩm cao cấp (>500):\n" + filterPremiumProducts.join(", "));
            break;
        case 2:
            let hasOutOfStock = stocks.some(stock => stock === 0);
            let allPricesAbove100 = prices.every(price => price > 100);
            alert(`Kết quả kiểm định:
- Có sản phẩm hết hàng: ${hasOutOfStock ? "Có" : "Không"}
- Tất cả sản phẩm giá > 100: ${allPricesAbove100 ? "Đúng" : "Sai"}`);
            break;
        case 3:
            let totalValue = prices.reduce((total, price, index) => {
                return total + price * stocks[index];
            }, 0);
            alert(`Tổng giá trị tài sản hiện có trong kho: ${totalValue.toLocaleString()} USD`);
            break;
        case 4:
            prices.forEach((price, index) => {
                price[index] = price * 0.9;
            });
            alert(`Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!`);
            break;
        case 5:
            let keyword = prompt("Nhập tên sản phẩm cần tìm:").toLowerCase();
            let result = [];
            names.forEach((name, index) => {
                if(name.toLowerCase().includes(keyword)) {
                    result.push(`${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}`);
                }
            });
            if(result.length) {
                alert("Kết quả tìm kiếm:\n" + result.join("\n"));
            } else {
                alert("Không tìm thấy sản phẩm nào.");
            }
            break;
        case 6:
            let stockReport = names.map((name, index) => {
                let status = stocks[index] > 0 ? `Còn hàng (${stocks[index]})` : `Hết hàng (0)`;
                return `${name}: ${status}`;
            });
            alert("Báo cáo tồn kho:\n" + stockReport.join("\n"));
            break;
        case 7:
            alert("Đã thoát chương trình. Hẹn gặp lại!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng nhập từ 1 đến 7.");
            break;
    }
} while (choice != 7);