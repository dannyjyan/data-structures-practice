class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {

    constructor(){
        this.root = null;
    }

    insert(val, root = this.root){
        if (!this.root){
            this.root = new TreeNode(val);
            return;
        }
        if (val < root.val){
            if (root.left === null){
                root.left = new TreeNode(val)
            } else {
                this.insert(val, root.left)
            }
        } else {
            if (root.right === null){
                root.right = new TreeNode(val)
            } else {
                this.insert(val, root.right)
            }
        }
    }
    searchRecur(val, root = this.root){
        if (root === null){
            return false;
        } else if (root.val === val){
            return true
        } else if (val < root.val){
            return this.searchRecur(val, root.left)
        } else {
            return this.searchRecur(val, root.right)
        }
    }
    searchIter(val, root = this.root){
        while (root !== null){
            if (root.val === val){
                return true;
            } else if (val < root.val){
                root = root.left
            } else {
                root = root.right
            }
        }
        return false
    }
}

module.exports = {
    TreeNode,
    BST
};