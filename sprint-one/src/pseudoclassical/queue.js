var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.tail = 1;
};

Queue.prototype.enqueue = function(value) {
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

Queue.prototype.dequeue = function() {
  var removed = this.storage[1];
  delete this.storage[1];
  reorderStorage(this.storage);
  this.tail--;
  return removed;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}
