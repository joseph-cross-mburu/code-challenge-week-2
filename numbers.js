//we are going to creat a function that creats an array of numbers starting from a certain number to a specific number.
function creatAnArrayOfNumbers(firstnumber, lastnumber) {
    // i will then creat an empty array whereby it will store the list of the generated numbers
    let myCreatedArray= []

    // Start counting from the first number to the last number
    //the first number should be less than the last number
    //the firstnumber will be incremented to increase by 1 everytime till it reaches the last number
    for (let i=firstnumber; lastnumber>=i; i++) {
        //once the first number has been increased by 1 it will be pushed to myCreatedArray
        //this process will carry on untill the lastnumber is reached
        myCreatedArray.push(i); 
    }

    return myCreatedArray;
}

console.log(creatAnArrayOfNumbers(4, 7));
console.log(creatAnArrayOfNumbers(-4, 7));