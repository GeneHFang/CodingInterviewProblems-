//recursively create all permutations of an array

let findPerms = (array) => {
    if (array.length < 2){
        return array;
    }

    let permArr = [];

    array.forEach((e, i) => {
        
        if (array.indexOf(e)!== i) { return; }
        let remaining = [...array.slice(0,i), ...array.slice(i+1)];


        findPerms(remaining).forEach((ele)=>{
            permArr.push([e, ele]);
        })
    });


    return permArr;
}
