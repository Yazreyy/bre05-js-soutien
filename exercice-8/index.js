function displayOddLengthWords(words){
    for(let i = 0; i < words.length ; i++){
        const element = words[i];
        if (element.length % 2 !== 0){
            console.log(`${element} (Longueur : ${element.length})`);
        }
    }
}

const tableau1 = ['hello', 'world', 'javascript', 'python', 'java'];
const tableau2 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const tableau3 = ['cat', 'dog', 'elephant', 'fox'];

displayOddLengthWords(tableau1);
displayOddLengthWords(tableau2);
displayOddLengthWords(tableau3);
