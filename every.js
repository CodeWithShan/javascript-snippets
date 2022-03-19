const monthlyScores = [8, 5, 1, 9, 10, 2, 3];

const isHighPerformed = (score) => {
    return score > 5;
}

console.log(monthlyScores.every(isHighPerformed));