function removeDupplicateArray(array){
    const uniqueArray = []

    for(let i = 0; i < array.length; i++){
        const element = array[i];
        let dupliqe = false;
        
        for(let j = 0; j < uniqueArray.length ; j++){
            if(element === uniqueArray[j]){
                dupliqe = true
            }
        }
        if(!dupliqe){
            uniqueArray.push(element)
        }
    }
        return uniqueArray;
}

console.log(removeDupplicateArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
console.log(removeDupplicateArray([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]));
console.log(removeDupplicateArray([5, 4, 3, 2, 1, 5, 4, 3, 2, 1]));