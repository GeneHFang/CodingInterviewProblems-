/**
 * Given an array of numbers and a number 'obstacle', 
 * return the array sorted in DESCENDING order 
 * BUT maintain the original positions of the given 'obstacle'.
 * 
 * ex)
 * input:
 *  arr = [2,3,1,3,2,2,6]
 *  obst = 2
 * expected output:
 *  retArr = [2,6,3,3,2,2,1]
 * 
 * @param {Array} arr of numbers
 * @param {Number} obst
 * @returns {Array} of numbers
 */
const SortAroundObstacle = (arr, obst) => {
    //Create object of obstacles
    //key: obstacle index pos
    //value: true 
    let obstacleObj = {};
    
    //Create new array that will only contain non-obstacle values
    let noObstArr = [];
    
    //Create new array that will be returned
    let retArr = [];

    //Loop through arr and place obstacles into obstacleObj 
    //and all other values into noObstArr
    arr.forEach((ele, ind) => { 
        if (ele === obst) { obstacleObj[ind] = true; } 
        else { noObstArr.push(ele); }
    });

    //Sort non-obstacles in ASCENDING order
    noObstArr.sort();

    //Loop and check if obstacle should exist in an index.
    //If so, add obstacle. Else add value from sorted noObstArr
    for(let i = 0; i < arr.length ; i++){
        if (obstacleObj[i]) { retArr.push(obst); }
        else { retArr.push( noObstArr.pop() ); }
    }

    return retArr;
}