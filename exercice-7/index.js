function isPrimeNumber(number){
    if(number <= 1){
        return false;
    }

    for(let i = 2; i < number/2; i++){
        if(number % i === 0){
            return false;
        	
        }
    }
    return true;
}

const testNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

for (let i = 0; i < testNumbers.length; i++) {
    const number = testNumbers[i];
    const isPrime = isPrimeNumber(number);
    console.log(`Your name ${number} est premier ? ${isPrime}`);
}