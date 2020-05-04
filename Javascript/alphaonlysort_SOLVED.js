/**
 * Sort an alphanumeric string by only the alpha characters, leaving all numbers in place
 * Solution Time Complexity: O(n*log(n))
 *         Space Complexity: O(n)
 */


//Example string
let stringEx = "a1c3b2";


//Hashmap to store only alpha characters in following format:
//{indexOfChar: alphaChar}
let has = {};


//place all alpha characters into hashmap
for (let i = 0 ; i < stringEx.length ; i++)
{
    //If the character at this index is not a number, place into hashmap
    if (Number.isNaN(parseInt(stringEx.charAt(i)))){
        has[i] = stringEx.charAt(i);
    }
}

//Sort all characters in ascending order
let arr = Object.values(has).sort();

//Hashmap to store sorted characters in the following format:
//{indexOfChar: alphaChar}
let sorted = {};

//For each key in original hashmap, 
//place into sorted hashmap the same key with new sorted value
Object.keys(has).forEach((key,index) => {
    sorted[key] = arr[index]; 
});

//Result string
let resString = "";

//build result string from sorted hashmap
for (let i = 0 ; i < stringEx.length ; i++)
{
    if (Number.isNaN(parseInt(stringEx.charAt(i)))){
        resString += sorted[i];
    }
    else{
        resString += stringEx.charAt(i);
    }
}

//log result to console
console.log(resString);
