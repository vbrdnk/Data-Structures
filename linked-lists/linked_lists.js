class Node {
	constructor(value, next, previous) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addToHead(value) {
		let newNode = new Node(value, this.head, null);
		if (this.head) {
			this.head.previous = newNode;
		} else {
			this.tail = newNode;
		}

		this.head = newNode;
	}

	addToTail(value) {
		let newNode = new Node(value, null, this.tail);

		if (this.tail) {
			this.tail.next = newNode;
		} else {
			this.head = newNode;
		}

		this.tail = newNode;
	}

	removeHead() {
		if (!this.head) {
			return null;
		}

		let currentHeadVal = this.head.value;
		this.head = this.head.next;

		if (this.head) {
			this.head.previous = null;
		} else {
			this.tail = null
		}

		return currentHeadVal;
	}

	removeTail() {
		if (!this.tail) {
			return null;
		}

		let currentTailVal = this.tail.value;
		this.tail = this.tail.previous;

		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}

		return currentTailVal;
	}

	search(searchValue) {
		let currentNode = this.head;

		while(currentNode) {
			if (currentNode.value === searchValue) {
				return currentNode.value;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	indexOf(value) {
		let indexes = [];
		let currentIndex = 0;
		let currentNode = this.head;

		while(currentNode) {
			if (currentNode.value === value) {
				indexes.push(currentIndex);
			}

			currentNode = currentNode.next;
			currentIndex++;
		}

		return indexes;
	}
}