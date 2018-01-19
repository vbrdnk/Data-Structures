class HashTableNode {
	constructor(key, value, next = null) {
		this.key = key;
		this.value = value;
		this.next = next;
	}
}

class HashTable {
	constructor(size) {
		this.buckets = Array(size);
		this.numBuckets = this.buckets.length;
	}

	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}

		return total % this.numBuckets;
	}

	insert(key, value) {
		let index = this.hash(key);

		if (!this.buckets[index]) {
			this.buckets[index] = new HashTableNode(key, value);
		} else if (this.buckets[index].key === key) {
			this.buckets[index].value = value;
		} else {
			let currentNode = this.buckets[index];
			while (currentNode.next) {
				if (currentNode.next.key === key) {
					currentNode.next.value = value;
					return;
				}
				currentNode = currentNode.next;
			}
			currentNode.next = new HashTableNode(key, value);
		}
	}

	get(key) {
		let index = this.hash(key);

		if (!this.buckets[index]) {
			return null;
		} else {
			let currentNode = this.buckets[index];
			while (currentNode) {
				if (currentNode.key === key) {
					return currentNode.value;
				}
				currentNode = currentNode.next;
			}

			return null;
		}
	}

	retrieveAll() {
		let allNodes = [];

		for (let i = 0; i < this.numBuckets; i++) {
			let currentNode = this.buckets[i];
			while (currentNode) {
				allNodes.push(currentNode);
				currentNode = currentNode.next;
			}
		}

		return allNodes;
	}

}

