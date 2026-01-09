function calculateAverageNested(arrays){
    let totalSum = 0;
    let totalCount = 0;

    
    for (let i = 0; i < arrays.length; i++) {
        const subArray = arrays[i];
        
        
        const subArraySum = subArray.reduce((acc, current) => acc + current, 0);
        
        totalSum += subArraySum;
        totalCount += subArray.length; 
    }
    
    
    if (totalCount === 0) {
        return 0;
    }
    
    return totalSum / totalCount;
}

console.log("Moyenne 1 :", calculateAverageNested([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log("Moyenne 2 :", calculateAverageNested([[10, 20, 30], [40, 50, 60]]));
console.log("Moyenne 3 :", calculateAverageNested([[1, 2], [3, 4], [5, 6]]));