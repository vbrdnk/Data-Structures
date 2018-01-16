class BinarySearchTree {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}

	insert(value) {
		if (value <= this.value) {
			if (!this.left) {
				this.left = new BinarySearchTree(value);
			} else {
				this.left.insert(value);
			}
		} else if (value >= this.value) {
			if (!this.right) {
				this.right = new BinarySearchTree(value);
			} else {
				this.right.insert(value);
			}
		}
	}

	contains(value) {
		if (value === this.value) {
			return true;
		} else if (value < this.value) {
			if (!this.left) {
				return false;
			} else {
				return this.left.contains(value);
			}
		} else if (value > this.value) {
			if (!this.right) {
				return false;
			} else {
				return this.right.contains(value);
			}
		}
	}

}

let bst = new BinarySearchTree(50);
bst.insert(40);
bst.insert(42);
bst.insert(52);
bst.insert(54);
console.log(bst.contains(43));
console.log(bst.contains(42));
// console.log(bst);