/**
 * Trees are represented as an Array
 *  [1, 2, 3, 4, null, 6, 7] 
 *  is
 *    1
 *  2   3
 * 4   6 7
 * 
 */
/**
 * @param {Array} root
 * @return {number}
 */
var goodNodes = function(root) {//If empty tree even though question specifies nodes expected [1,10^5]
    if (root.length <= 0) return 0;
    else if (root.length === 1) return 1;
    
    let numGood = 0
    let iterator = 0; 
    let max = root[iterator]; 
    
    recursivePreOrder(root, max, iterator);
    
    return numGood;
    
    function recursivePreOrder(root, max, iterator) {
        let rownum = Math.floor(Math.log2(iterator+1)) + 1; 
        let left = rownum*iterator + 1;
        let right = rownum*iterator + 2;

        if (root[iterator] >= max) {
            numGood++;
            max = root[iterator];
        }
        if (root[left]){
            recursivePreOrder(root, max, left);
        }
        if (root[right]){
            recursivePreOrder(root, max, right);
        }
    };

    
};



