// first we are goimg to create an array containing of numbers from 10 to 20
const Numbers = [10,11,12, 13,14,15,16,17,18,19,20];
// after we have our array we are going to creat a function that will identify and output prime numbers from our array
function getPrimeNumbers(numbers) {
    if(10>Number) {
        return undefined;
    }
// then we will use a for loop to help set conditions for the prime numbers 
    for(i = 2; i <= Math.sqrt(numbers); i++) {
        if(numbers % 2 === 0) {
            //this means that the number is an even number
            return undefined
        } 
    }
    return numbers 
}
console.log(Numbers.filter(getPrimeNumbers));
//we will use the filter method to filter the prime numbers from our array and output them 