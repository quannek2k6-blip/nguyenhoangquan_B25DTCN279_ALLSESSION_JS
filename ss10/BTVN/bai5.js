const teamHistory = [
    {
        name: "Messi",
        position: "Forward",
        nationality: "Argentina",
        seasons: {
            "2022-2023": { matches: 34, goals: 21, assists: 14, yellowCards: 3, },
            "2023-2024": { matches: 32, goals: 25, assists: 15, yellowCards: 2, },
            "2024-2025": { matches: 28, goals: 18, assists: 12, yellowCards: 1, },
        },
    },
    {
        name: "Ronaldo",
        position: "Forward",
        nationality: "Portugal",
        seasons: {
            "2022-2023": { matches: 38, goals: 28, assists: 8, yellowCards: 5 },
            "2023-2024": { matches: 35, goals: 30, assists: 10, yellowCards: 4 },
            "2024-2025": { matches: 30, goals: 22, assists: 9, yellowCards: 3 },
        },
    },
];
function generatePlayerSeasonReport(playerName, teamHistory) {
    let player = teamHistory.find((player) => player.name === playerName);
    if(!player) {
        return `Không tìm thấy cầu thủ ${playerName}`;
    }
    let totalMatches = 0;
    let totalGoals = 0;
    let totalAssists = 0;
    let totalYellowCards = 0;
    let bestSeasonName = null;
    let bestSeasonStats = null;
    for (const season in player.seasons) {
        let stats = player.seasons[season];
        totalMatches += stats.matches;
        totalGoals += stats.goals;
        totalAssists += stats.assists;
        totalYellowCards += stats.yellowCards;
        if(!bestSeasonStats || stats.goals > bestSeasonStats.goals ||
            (stats.goals === bestSeasonStats.goals && stats.assists > bestSeasonStats.assists)
        ) {
            bestSeasonName = season;
            bestSeasonStats = stats;
        }
    }
    let averageGoalsPerMatch = Math.round((totalGoals / totalMatches) * 100) / 100;
    let averageAssistsPerMatch = Math.round((totalAssists / totalMatches) * 100) / 100;
    return {
        name: player.name,
        position: player.position,
        nationality: player.nationality,
        careerStats: {
            totalMatches,
            totalGoals,
            totalAssists,
            totalYellowCards,
            averageGoalsPerMatch,
            averageAssistsPerMatch,
            bestSeason: {
                season: bestSeasonName,
                goals: bestSeasonStats.goals,
                assists: bestSeasonStats.assists,
            },
        },
    };
}
console.log(generatePlayerSeasonReport("Messi", teamHistory));