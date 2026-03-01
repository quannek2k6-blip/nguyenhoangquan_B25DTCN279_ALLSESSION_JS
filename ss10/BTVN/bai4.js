const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];
function analyzeSalary(minYears, teamPlayers) {
    let filteredPlayers = teamPlayers.filter(player => player.years >= minYears);
    if(filteredPlayers.length === 0) {
        return {
            totalSalary: 0,
            highestPaid: null,
            lowestPaid: null
        };
    }
    let totalSalary = filteredPlayers.reduce((sum, player) => sum + player.salary, 0);
    let highestPaid = filteredPlayers.reduce((max, player) => {
        return (player.salary > max.salary) ? player : max;
    });
    let lowestPaid = filteredPlayers.reduce((min, player) => {
        return (player.salary < min.salary) ? player : min;
    });
    return {
        totalSalary: totalSalary,
        highestPaid: highestPaid,
        lowestPaid: lowestPaid
    };
}
console.log(analyzeSalary(10, players));
console.log(analyzeSalary(30, players));