var Stack = function() {
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.tail = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.tail++;
  this.storage[this.tail] = value;
};

stackMethods.pop = function() {
  var removed = this.storage[this.tail];
  delete this.storage[this.tail];
  this.tail --;
  return removed;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
