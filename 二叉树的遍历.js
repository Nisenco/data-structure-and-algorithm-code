// function preorder(root){
// 	if(!root){
// 		return ;
// 	}
// 	preorder(root.left);
// 	preorder(root.right);
// }

const Compare = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0,
}

function defaultCompare(a, b) {
	if (a === b) {
		return Compare.EQUALS;
	}
	return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

class Node {
	constructor(value) {
		this.key = value;
		this.left = undefined;
		this.right = undefined;
	}
	toString() {
		return `${this.key}`;
	}
}

class BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.root = null;
	}

	insert(key) {
		if (this.root == null) {
			this.root = new Node(key);
		} else {
			this.insertNode(this.root, key);
		}
	}
	insertNode(node, key) {
		if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
			if (node.left == null) {
				node.left = new Node(key);
			} else {
				this.insertNode(node.left, key);
			}
		} else if (node.rigth === null) {
			node.right = new Node(key);
		} else {
			this.insertNode(node.right, key);
		}
	}

	// 中序遍历
	inOrderTraverse(callback) {
		this.inOrderTraverseNode(this.root, callback);
	}
	inOrderTraverseNode(node, callback) {
		if (node != null) {
			this.inOrderTraverseNode(node.left, callback);
			callback(node.key);
			this.inOrderTraverseNode(node.right, callback)
		}
	}
	// 前序遍历 
	preOrderTraverse(callback) {
		this.preOrderTraverseNode(this.root, callback);
	}
	preOrderTraverseNode(node, callback) {
		if (node !== null) {
			callback(node.key);
			this.preOrderTraverseNode(node.left, callback);
			this.preOrderTraverseNode(node.rigth, callback);
		}
	}
	// 后序遍历
	postOrderTraverse(callback) {
		this.postOrderTraverseNode(this.root, callback);
	}

	postOrderTraverseNode(node, callback) {
		if (node != null) {
			this.postOrderTraverseNode(node.left, callback);
			this.postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	}
	min(){
		return this.minNode(this.root);
	}
	minNode(node){
		let current = node;
		while(curent != null && current.left !== null){
			current = current.left;
		}
		return current;
	}
	max(){
		this.maxNode(this.root);
	}
	maxNode(node){
		let current = node;
		while(current != null && current.right != null){
			current = current.right;
		}
		return current;
	}
}