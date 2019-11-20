var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.tail = 1;
  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

var reorderStorage = function (obj) {
  for (var key in obj) {
    obj[key - 1] = obj[key];
    if (obj[key + 1] === undefined) {
      delete obj[key];
    }
  }
  return obj;
};

queueMethods.dequeue = function() {
  var removed = this.storage[1];
  delete this.storage[1];
  reorderStorage(this.storage);
  this.tail--;
  return removed;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
}


