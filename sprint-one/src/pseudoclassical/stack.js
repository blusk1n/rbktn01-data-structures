var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

  this.storage = {};
  this.tail = 0;
};

Stack.prototype.push = function(value) {
  this.tail++;
  this.storage[this.tail] = value;
};

Stack.prototype.pop = function() {
  var removed = this.storage[this.tail];
  delete this.storage[this.tail];
  this.tail --;
  return removed;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

