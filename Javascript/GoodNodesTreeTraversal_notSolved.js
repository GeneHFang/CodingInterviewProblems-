/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {//If empty tree even though question specifies nodes expected [1,10^5]
    if (root.length <= 0) return 0;
    else if (root.length === 1) return 1;
    
    //Root is always good
    let numGoodHash = {
        numGood: 1,
    };
     
    let iterator = 0;
    let rownum = 1; 
    
    recursivePreOrder(root, numGoodHash, iterator, rownum);
    
    return numGoodHash.numGood;
    
    
};


const recursivePreOrder = (root, hash, iterator, rownum) => {
    let left = rownum*iterator + 1;
    let right = rownum*iterator + 2;
    if (root[left]===undefined && root[right]===undefined) {
        return;
    }
    else if (root[left]){
        if (root[left] >= root[iterator]) hash.numGood++;
       
        
        iterator = left; 
        rownum++;
        recursivePreOrder(root, hash, iterator, rownum);
    }
    else if (root[right]){
        if (root[right] >= root[iterator]) hash.numGood++;
        
        iterator = right;
        rownum++;
        recursivePreorder(root, hash, iterator, rownum);
    }
    else {
        console.log("shouldn't be here")
    }
};
