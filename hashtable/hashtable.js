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
		console.log('Index:', index);
		if (!this.buckets[index]) {
			this.buckets[index] = new HashTableNode(key, value);
		} else {
			let currentNode = this.buckets[index];
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = new HashTableNode(key, value);
		}
	}
}


let hashTable = new HashTable(30);
hashTable.insert('Dean', 'dean@gmail.com');
hashTable.insert('Megan', 'megan@gmail.com');
hashTable.insert('Dane', 'dane@yahoo.com');
console.log(hashTable.buckets);
