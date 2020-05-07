/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

 *  Return the answer in an array.
 *  
 *  Ex:
 *      Input:  [8,1,2,2,3]
 *      Output: [4,0,1,1,3]
 */

//Brute force init solution
let smallerThanIndexBrute = (nums) => {
    //create return array
    let arr = [];

    //init count
    let count = -1;

    //loop through each index
    for (let i = 0 ; i < nums.length ; i++)
    {
        //value to add to array
        count = 0; 
        //loop through every other index
        for (let j = 0; j < nums.length; j++)
        {
            if (j === i){
                continue;
            }
            else{ //add to count for every index less than i index
                count = nums[j] < nums[i] ? count + 1 : count;
            }
        }
        arr.push(count);
    }
    return arr;
}


//Sort solution
let smallerThanIndexSort = (nums) => {
    //Create a copy of nums, sorted in ascending order
    let arr = [...nums].sort((a,b)=>a-b);

    //The sorted array's index of the number of interest is how many values inside the original array it is larger than.  
    return nums.map(num=> arr.indexOf(num));
}