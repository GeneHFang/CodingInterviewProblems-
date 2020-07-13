/**
 * Given a binary tree, a node X is considered 'good' if the all nodes on 
 * the path from the root to node X have values less than or equal node X 
 * 
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
const goodNodes = (root) => {

    //trivial cases
    if (root.length <= 0) return 0;
    else if (root.length === 1) return 1;
    
    //initial values
    let numGood = 0
    let iterator = 0; 
    let max = root[iterator]; 
    
    //recursive preorder traversal
    recursivePreOrder(root, max, iterator);
    
    return numGood;
    
    //defined within scope of goodNodes() to be able to access and increment numGood
    function recursivePreOrder(root, max, iterator) {

        //Find left and right indices through determining the row that the current element is in
        let rownum = Math.floor(Math.log2(iterator+1)) + 1; 
        let left = rownum*iterator + 1;
        let right = rownum*iterator + 2;

        //Visit current first
        if (root[iterator] >= max) {
            numGood++;
            max = root[iterator];
        }
        //Then visit left
        if (root[left]){
            recursivePreOrder(root, max, left);
        }
        //Then visit right
        if (root[right]){
            recursivePreOrder(root, max, right);
        }
    };

    
};



