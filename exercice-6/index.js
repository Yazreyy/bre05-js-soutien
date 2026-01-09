function calculateAverageNumber(number){
    return number.reduce((a, b) => a + b) / number.length;
}

console.log(calculateAverageNumber([1,2,3,4,5]));
console.log(calculateAverageNumber([10,20,30,40,50]));
console.log(calculateAverageNumber([5,4,3,2,1]));