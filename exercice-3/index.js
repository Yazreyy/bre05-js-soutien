function findLongestWords(motlong) {
    let longmot = motlong[0];
    
    for (const current of motlong){
        if(current.length > longmot.length){
            longmot = current
        }
    }
    return longmot;
}
console.log(findLongestWords(['hello', 'world', 'javascript', 'python', 'java']));
console.log(findLongestWords(['apple', 'banana', 'cherry', 'date', 'elderberry']));
console.log(findLongestWords(['cat', 'dog', 'elephant', 'fox']));