const part = (arr, low, high) =>{
    let pivot = arr[high];

    let i = (low - 1);

    for (let j = low ; j < high ; j++){
        if (arr[j] < pivot){
            i++;

            //swap
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    //swap arr[i+1] and pivot
    let temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i+1;
}

const sort = (arr, low, high) => {
    if (low < high) {
        let partInd = part(arr, low, high);

        sort(arr, low, partInd-1);
        sort(arr, partInd, high);
    }
}

