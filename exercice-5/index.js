function sortAscendingNumber(array){
    const sortedArray = [...array];
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
}

console.log(sortAscendingNumber([5, 3, 1, 4, 2]));
console.log(sortAscendingNumber([10, 20, 30, 40, 50]));
console.log(sortAscendingNumber([5, 4, 3, 2, 1]));