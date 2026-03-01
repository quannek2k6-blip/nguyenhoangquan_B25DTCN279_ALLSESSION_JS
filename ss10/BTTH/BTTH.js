let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }
];
let choice;
do {
    choice = +prompt(
        "--- QUẢN LÝ ĐỘI BÓNG (OBJECT) ---\n" +
        "1. Xem danh sách\n" +
        "2. Thêm cầu thủ\n" +
        "3. Tìm kiếm (theo ID)\n" +
        "4. Cập nhật bàn thắng\n" +
        "5. Xóa cầu thủ\n" +
        "0. Thoát\n" +
        "Mời nhập lựa chọn của bạn:"
    );
    switch (choice) {
        case 1:
            displayPlayers();
            break;
        case 2:
            addPlayer();
            break;
        case 3:
            findPlayerById();
            break;
        case 4:
            updateGoal();
            break;
        case 5:
            deletePlayer();
            break;
        case 0:
            alert("Đã thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice != 0);
function displayPlayers() {
    for (let i = 0; i < squad.length; i++) {
        console.log(`Mã ${squad[i].id} - ${squad[i].name} (${squad[i].position}): ${squad[i].goals} bàn`);
    }
}
function addPlayer() {
    let name = prompt("Nhập tên cầu thủ:");
    let position = prompt("Nhập vị trí:");
    let goal = +prompt("Nhập số bàn thắng ghi được:");
    let id = Math.floor(Math.random()*999999) + Date.now();
    let newPlayer = {
        id: id,
        name: name,
        goals: goal,
        position: position,
    };
    squad.push(newPlayer);
    alert("Đã thêm cầu thủ!");
}
function findPlayerById() {
    let id = prompt("Mời nhập ID cầu thủ cần tìm:");
    let result = squad.find((item) => item.id == id);
    if(result) {
        console.log("Kết quả tìm kiếm:", result);
    } else {
        console.log(`Không tìm thấy cầu thủ có ID ${id}`);
    }
}
function updateGoal() {
    let id = prompt("Nhập ID cầu thủ cần cập nhật:");
    let updateIndex = squad.findIndex((item) => {
        return item.id == id;
    });
    if(updateIndex != -1) {
        squad[updateIndex].goals += 1;
    } else {
        console.log(`Không tìm thấy cầu thủ có ID ${id}`);
    }
}
function deletePlayer() {
    let idDelete = prompt("Nhập ID cầu thủ cần xóa:");
    let index = squad.findIndex(player => player.id == idDelete);
    if(index !== -1) {
        let deleteName = squad[index].name;
        squad.splice(index, 1);
        console.log(`Đã hoàn tất thủ tục chuyển nhượng cho cầu thủ ${deleteName}`);
    } else {
        console.log(`Không tìm thấy cầu thủ có ID ${idDelete}`);
    }
}