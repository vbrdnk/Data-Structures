function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, previous) {
	this.value = value;
	this.next = next;
	this.previous = previous;
}

LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.previous = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
};

let ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);
console.log(ll);