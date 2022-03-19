const profits = [40, 50, 80, 56];

// let total = 0;

// for (let i = 0; i < profits.length; i++) {
//     total += profits[i];
// }

// console.log(total)

const totalProfit = profits.reduce((total, profit) => total + profit);

console.log(totalProfit)