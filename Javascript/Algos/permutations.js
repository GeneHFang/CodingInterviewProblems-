//recursively create all permutations of an array

let findPerms = (arr) => {
    if (arr.length < 2){
        return arr;
    }

    let permArr = [];

    arr.forEach((e, i) => {
        
        if (arr.indexOf(e)!== i) { return; }
        let remaining = [...arr.slice(0,i), ...arr.slice(i+1)];


        findPerms(remaining).forEach((ele)=>{
            permArr.push([e, ele]);
        })
    });


    return permArr;
}
