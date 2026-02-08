let players = [];

function getPositionName(pos) {
    if (pos === 1) return "Thủ môn";
    if (pos === 2) return "Hậu vệ";
    if (pos === 3) return "Tiền vệ";
    if (pos === 4) return "Tiền đạo";
    return "";
}

let n = parseInt(prompt("Có bao nhiêu cầu thủ cần nhập vào đội bóng?"));

for (let i = 0; i < n; i++) {
    let id;
    let duplicate;

    do {
        id = prompt("Nhập mã cầu thủ:");
        duplicate = false;

        for (let j = 0; j < players.length; j++) {
            let parts = players[j].split("-");
            if (parts[0] === id) {
                duplicate = true;
                alert("Mã cầu thủ đã tồn tại!");
                break;
            }
        }
    } while (duplicate);

    let name;
    do {
        name = prompt("Nhập tên cầu thủ:");
    } while (name === "");

    let pos;
    do {
        pos = parseInt(prompt("Vị trí (1: Thủ môn 2: Hậu vệ 3: Tiền vệ 4: Tiền đạo):"));
    } while (pos < 1 || pos > 4);

    let positionName = getPositionName(pos);
    players.push(id + "-" + name + "-" + positionName);
}

function printTeamRoster() {
    console.log(`Đội bóng hiện tại (${players.length} cầu thủ):`);
    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        console.log(
            `${i + 1}. Mã: ${parts[0]} - Tên: ${parts[1]} - Vị trí: ${parts[2]}`
        );
    }
}

function pushPlayer(name, position) {
    let id = prompt("Nhập mã cầu thủ mới:");
    let duplicate = false;

    for (let i = 0; i < players.length; i++) {
        let parts = players[i].split("-");
        if (parts[0] === id) {
            duplicate = true;
            break;
        }
    }

    if (!duplicate) {
        players.push(id + "-" + name + "-" + position);
    }
}

printTeamRoster();
