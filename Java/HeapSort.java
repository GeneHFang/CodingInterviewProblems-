
//Heapsort implementation
public class HeapSort{

    /**
     * Recursive method heapify
     * @param array is the array being heapified
     * @param size is the size of the array
     * @param indexOfRoot is the index position at which we are aiming to be the largest value
     */
    private void heapify(int[] array, int size, int indexOfRoot){
        //Initialize index of "largest" value as the root (or subroot) passed initially
        int largest = indexOfRoot;

        //Indexes for left and right 'child nodes' of 'largest' node 
        int leftChild  = 2*indexOfRoot + 1;
        int rightChild = 2*indexOfRoot + 2;

        //Check whether 'largest' is actually largest
        //If not, reassign index
        if (leftChild < size && array[leftChild] > array[largest]){
            largest = leftChild;
        }
        if (rightChild < size && array[rightChild] > array[largest]){
            largest = rightChild;
        }

        //if root index was not the largest value,
        //swap and recursively call heapify using the largest value index as root
        if (largest != indexOfRoot){
            int temp = array[indexOfRoot];
            array[indexOfRoot] = array[largest];
            array[largest] = temp;

            heapify(array, size, largest);
        }
    }


    /**
     * Actual sorting method, utilizing the heapify private method
     * @param array is the array that we are trying to heapsort
     */
    public void sort(int[] array){
    
        int length = array.length;

        //Create our first heap (not an actual tree data structure, just rearranging our intial array)
        for (
            int i = length/2 - 1; //we begin with the last 'subtree' index position in our array
            i>=0; //looping until we reach index 0
            i-- //and decrementing the index position by one each iteration
            ){
                heapify(array, length, i);
            }

        //Once array has been heapified, we use the same function but this time moving the root (largest value) to the end
        // and then heapifying the reduced array
        for(
            int i = length - 1; //start at the end of the array
            i>0; //looping until we iterate through every element
            i-- //and decrementing by one each iteration
            ){
                //Swap the root (first) and the last element of the unsorted array 
                //The last element of this array will be in the sorted position upon completion of swap
                int temp = array[0]; 
                array[0] = array[i];
                array[i] = temp;

                //Now we heapify the unsorted region of the array (index 0 to index i) 
                heapify(array, i, 0);
            }
    }
}