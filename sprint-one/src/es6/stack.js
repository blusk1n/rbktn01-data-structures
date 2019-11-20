class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.tail = 0;
  };
	push(value) {
		this.tail++;
		this.storage[this.tail] = value;
	};

	pop() {
		var removed = this.storage[this.tail];
		delete this.storage[this.tail];
		this.tail --;
		return removed;
	};

	size() {
		return Object.keys(this.storage).length;
	};
}