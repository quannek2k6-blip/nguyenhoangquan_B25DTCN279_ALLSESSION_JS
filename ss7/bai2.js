let playerIds = ["P001", "P002", "P003"];
let playerNames = ["Nguyễn Văn A", "Trần Văn B", "Lê Văn C"];
let playerJerseyNumbers = [1, 5, 10];

function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            `${i + 1}. ${playerIds[i]} - ${playerNames[i]} - Số áo ${playerJerseyNumbers[i]}`
        );
    }
}

function updatePlayerNameAndJersey(playerId, newName, newJerseyNumber) {
    for (let i = 0; i < playerIds.length; i++) {
        if (playerIds[i] === playerId) {
            playerNames[i] = newName;
            playerJerseyNumbers[i] = newJerseyNumber;
            return true;
        }
    }
    return false;
}

let searchId = prompt("Nhập mã cầu thủ muốn cập nhật (ví dụ: P001):");

let foundIndex = -1;
for (let i = 0; i < playerIds.length; i++) {
    if (playerIds[i] === searchId) {
        foundIndex = i;
        break;
    }
}

if (foundIndex !== -1) {
    let newName = prompt("Nhập tên mới cho cầu thủ:");
    let newJersey;
    do {
        newJersey = parseInt(prompt("Nhập số áo mới (1 - 99):"));
    } while (isNaN(newJersey) || newJersey < 1 || newJersey > 99);

    let updated = updatePlayerNameAndJersey(searchId, newName, newJersey);

    if (updated) {
        console.log("Cập nhật thành công!");
        printTeamRoster();
    }
} else {
    alert("Không tìm thấy cầu thủ với mã này!");
}
