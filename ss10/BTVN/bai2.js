const player = {
    name: "De Bruyne",
    position: "Midfielder",
    goals: 8,
    assists: 25,
    matchesPlayed: 35,
};
function addPerformanceScore(player) {
    let score = (player.goals + player.assists) / player.matchesPlayed;
    player.performancePerMatch = Math.round(score * 100) / 100;
    player.isKeyPlayer = player.performancePerMatch >= 1.0;
    console.log(player);
}
addPerformanceScore(player);