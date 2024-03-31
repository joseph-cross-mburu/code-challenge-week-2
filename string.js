
// we are going to creat a function that changes the case of a letter
function changeLetterCase(ourstring) {
    return ourstring
    .split("") //first we will have to split the string into individual letters so that we can work on them individually
    // now that we have split the array we are going to use a map method and pass in the splitted letters as our parameter
    .map(function (letters) 
    {
        // we shall use the if staments here to check whether the letters are capitalised or not
        if(letters === letters.toLowerCase()) 
        //the first if statments checks whether the letter is in lowercase
        {
            //if the letter is in lowercase it will be converted and returned to uppercase 
            return letters.toUpperCase();
        }
        // the else statment will basically do the opposite of the first statement
         else {return letters.toLowerCase()};
    })
    .join("")
    //this will help us to join back the letters back again to form the string
 }
 //we shall then call our function passing in the actuall string as our argument here
 console.log(changeLetterCase("Programming is the Best Skills That Students Need to Learn"))