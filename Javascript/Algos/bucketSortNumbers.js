//Bucket sort example for numbers

//Insertion sort import
import { insertionSort } from '../sortFunctions/sortFunctions';

//Sort a list of students grades
/**
 * We can assume that you are a reasonably competent teacher and can expect that most students pass and that your test has no extra credit. 
 * Therefore the buckets we create are based on a reasonable assumption that student grades will fall mostly between 65-100, with a few outliers below 65. 
 * Thus we can create a bucket for grades <65, 66-70, 71-75, 76-80, 81-85, 86-90, 91-95, 96-100. 
 * If we are to consider normal distribution, we can alter these buckets with the assumption that we can expect more grades between 70 and 80 and less grades outside of that range.
 * The less buckets we use, the more space efficient we can be.
 * Thus a more reasonable set of buckets, assuming normal distribution without any externalities like cheating, can be:
 * <=70, 71-75, 76-80, 81-85, >=86 
*/
//example run
let unsorted = [77, 73, 64, 98, 94, 81, 72, 81, 83, 75];
console.log("Unsorted array: ",unsorted);

//See below
let sorted = bucketSort(unsorted, true);
console.log("Sorted array: ", sorted);


/**
 * Bucket Sort for example above. 
 * Due to nature of bucket sort, it is harder to make a one-size-fits-all function for bucket sort. 
 * Thus this function only serves the purpose of sorting for our specified array of grades 
 * @param {Array of grades} array 
 * @param {Boolean true if ascending false if descending} ascending 
 */
export const bucketSortGrades = (array, ascending) => {
    //bucket array
    let buckets = [
        //Index 0 : <=70
        [],
        //Index 1 : 71-75
        [],
        //Index 2 : 76-80
        [],
        //Index 3 : 81-85
        [],
        //Index 4 : >=86
        []
    ];
    
    //place into buckets
    array.forEach(grade=> {
        if (grade <= 70) {
            buckets[0].push(grade);
        }
        else if (grade <= 75 && grade > 70){
            buckets[1].push(grade);
        }
        else if (grade <= 80 && grade > 75){
            buckets[2].push(grade);
        }
        else if (grade <= 85 && grade > 80){
            buckets[3].push(grade);
        }
        else{
            buckets[4].push(grade);
        }
    });
    
    /**
     * A common optimization is to flatten the bucket array first then sort the entire array
     * Since I explained it in my blog as sort then flatten, I will leave this option as comments
     */
    //let flatBucket = buckets.flat();
    //insertionSort(flatBucket, ascending);
    //return flatBucket;

    //Sort each bucket using insertion sort
    for (let i = 0 ; i < buckets.length ; i++){
        insertionSort(buckets[i],ascending);
    };
    
    //Flatten array of buckets and return
    return buckets.flat();    
}


