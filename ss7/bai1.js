let playerIds = [];
let playerPositions = [];

function getPositionName(pos) {
    if (pos === 1) return "Thủ môn";
    if (pos === 2) return "Hậu vệ";
    if (pos === 3) return "Tiền vệ";
    if (pos === 4) return "Tiền đạo";
    return "";
}

let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng ?"));

for (let i = 0; i < n; i++) {
    console.log(`Nhập cầu thủ ${i + 1} :`);

    let id;
    let isDuplicate;
    do {
        id = prompt("Mã cầu thủ :");
        isDuplicate = false;

        for (let j = 0; j < playerIds.length; j++) {
            if (playerIds[j] === id) {
                isDuplicate = true;
                alert("Mã cầu thủ đã tồn tại, vui lòng nhập lại!");
                break;
            }
        }
    } while (isDuplicate);

    let position;
    do {
        position = parseInt(
            prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo) :")
        );
    } while (position < 1 || position > 4);

    playerIds.push(id);
    playerPositions.push(position);
}

function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${playerIds.length} cầu thủ):`);
    for (let i = 0; i < playerIds.length; i++) {
        console.log(
            `${i + 1}. ${playerIds[i]} - ${getPositionName(playerPositions[i])}`
        );
    }
}

function findPlayersByPosition(position) {
    let indexes = [];
    for (let i = 0; i < playerPositions.length; i++) {
        if (playerPositions[i] === position) {
            indexes.push(i);
        }
    }
    return indexes;
}

let searchPos = parseInt(
    prompt("Nhập vị trí cầu thủ muốn đếm số lượng (1: Thủ môn , 2: Hậu vệ ,3: Tiền vệ, 4: Tiền đạo) :")
);

printTeamRoster();

let result = findPlayersByPosition(searchPos);
console.log(`Số cầu thủ ở vị trí ${getPositionName(searchPos)}: ${result.length}`);
console.log(`Các chỉ số cầu thủ ở vị trí ${getPositionName(searchPos)}: ${result.join(", ")}`);
