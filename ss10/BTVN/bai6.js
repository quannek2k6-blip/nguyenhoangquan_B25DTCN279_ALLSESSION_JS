const players = [
    { name: "Messi", position: "Forward", age: 36, goals: 25, assists: 15, matches: 34, yellowCards: 2 },
    { name: "Ronaldo", position: "Forward", age: 39, goals: 30, assists: 10, matches: 38, yellowCards: 4 },
    { name: "Neymar", position: "Forward", age: 32, goals: 18, assists: 20, matches: 32, yellowCards: 3 },
    { name: "De Bruyne", position: "Midfielder", age: 33, goals: 8, assists: 25, matches: 35, yellowCards: 1 },
    { name: "Kante", position: "Midfielder", age: 33, goals: 2, assists: 5, matches: 36, yellowCards: 0 },
    { name: "Van Dijk", position: "Defender", age: 33, goals: 5, assists: 3, matches: 33, yellowCards: 2 },
    { name: "Alisson", position: "Goalkeeper", age: 31, goals: 0, assists: 1, matches: 37, yellowCards: 0 }
];
function generateRankingReport(minMatches, players) {
    let filteredPlayers = players
        .filter(player => player.matches >= minMatches)
        .map(player => {
            let rawPerformance = (player.goals + player.assists) / player.matches;
            let performanceScore = Math.round(rawPerformance * 100) / 100;
            let rawEfficiency = rawPerformance - (player.yellowCards / player.matches) * 10;
            let efficiencyScore = Math.round(rawEfficiency * 100) / 100;
            return { ...player, performanceScore, efficiencyScore };
        });
    filteredPlayers.sort((player1, player2) => {
        if(player2.efficiencyScore !== player1.efficiencyScore) {
            return player2.efficiencyScore - player1.efficiencyScore;
        }
        if(player2.performanceScore !== player1.performanceScore) {
            return player2.performanceScore - player1.performanceScore;
        }
        if(player2.goals !== player1.goals) {
            return player2.goals - player1.goals;
        }
        return 0;
    });
    console.log(`XẾP HẠNG ĐỘI BÓNG (từ ${minMatches} trận trở lên)`);
    filteredPlayers.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name.padEnd(8)} - Efficiency: ${player.efficiencyScore} | 
        Performance: ${player.performanceScore} | Goals: ${player.goals}`);
    });
    console.log("-----------------------------------");
    console.log(`Tổng số cầu thủ xếp hạng: ${filteredPlayers.length}`);
    if(filteredPlayers.length > 0) {
        console.log(`Cầu thủ xuất sắc nhất: ${filteredPlayers[0].name}`);
        let top3 = filteredPlayers.slice(0, 3);
        let sumEfficiency = top3.reduce((acc, player) => acc + player.efficiencyScore, 0);
        let averageEfficiency = Math.round((sumEfficiency / top3.length) * 100) / 100;
        console.log(`Trung bình efficiency top 3: ${averageEfficiency}`);
    }
}
generateRankingReport(30, players);