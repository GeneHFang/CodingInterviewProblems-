
/**
 * Classic insertion sort in place. 
 * @args Array of numbers or strings, boolean indicating ascending (true) or descending(false)
 * @returns null, modifies argument array.
 */
export const insertionSort = (array, ascending) => {
    let n = array.length;
    for(let i = 0; i < n ; i++){
        let key = array[i];
        let j = i - 1;
        
        if (ascending){
            while (j >= 0 && array[j] > key){
                array[j+1] = array[j];
                j = j-1;
            }
        }
        else {
            while (j >= 0 && array[j] < key){
                array[j+1] = array[j];
                j = j-1;
            }
        }

        array[j+1] = key; 
    }
}