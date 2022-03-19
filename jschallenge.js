const array = [
    { gull: ["sec1", "sec2", "sec3"] },
    { saman: ["sec4", "sec5", "sec6"] },
];

const flattenArr = array.map(arr => {
    return Object.values(arr);
}).flat(array.length);

console.log(flattenArr);

// const mappedArr = array.map(arr => {
//     return Object.values(arr);
// })

// console.log(Object.values(array));