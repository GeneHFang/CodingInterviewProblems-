let unwrap = (matrix) => {
    console.log(matrix);
    
    if (matrix.length === 0){
        return [];
    }
    if (matrix.length === 1 && matrix[0].length === 1){
        return matrix[0];
    }
    let arr = [];

    arr.push(...moveRight(matrix[0]));
    trim(matrix, 'top');
    arr.push(...moveDown(matrix));
    trim(matrix, 'right');
    arr.push(...moveLeft(matrix[matrix.length-1]));
    trim(matrix, 'bottom');
    arr.push(...moveUp(matrix));
    trim(matrix, 'left');
    
    console.log(arr);
    return [...arr,...unwrap(matrix)];

}


let moveRight = (row)=>{
    return row;
}

let moveDown = (matrix) => {
    let retArr = [];
    matrix.forEach(row => {
        retArr.push(row[row.length-1]);
    });
    return retArr;
}

let moveLeft = (row) => {
    return row.reverse();
}

let moveUp = (matrix) => {
    let retArr = [];
    matrix.forEach(row=>{
        retArr.unshift(row[0]);
    });
    return retArr;
}

let trim = (matrix, side) => {
    if (side === 'top'){
        matrix.shift(); 
    }
    else if (side === 'bottom'){
        matrix.pop();
    }
    else {
        matrix.forEach(row=>{ 
            if (side === 'left'){
                row.shift();
            }
            else if (side === 'right'){
                row.pop();
            }
        })
    }
}
