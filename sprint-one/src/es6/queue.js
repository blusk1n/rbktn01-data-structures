class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.tail = 1;
  }
	enqueue(value) {
		this.storage[this.tail] = value;
		this.tail++;
	};

	dequeue() {
		let reorderStorage = obj =>{
			for (var key in obj) {
				obj[key - 1] = obj[key];
				if (obj[key + 1] === undefined) {
		  		delete obj[key];
				}
			}
			return obj;
		};
		var removed = this.storage[1];
		delete this.storage[1];
		reorderStorage(this.storage);
		this.tail--;
		return removed;
	};

	size() {
		return Object.keys(this.storage).length;
	}
}
