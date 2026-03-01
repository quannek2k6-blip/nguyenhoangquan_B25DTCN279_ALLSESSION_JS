const player = {
    name: "Messi",
    position: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
};
function showPlayerInfo(player) {
    let total = player.goals + player.assists;
    console.log(`Tên: ${player.name}`);
    console.log(`Vị trí: ${player.position}`);
    console.log(`Tuổi: ${player.age}`);
    console.log(`Bàn thắng mùa này: ${player.goals}`);
    console.log(`Kiến tạo mùa này: ${player.assists}`);
    console.log(`Tổng đóng góp: ${total}`);
}
showPlayerInfo(player);