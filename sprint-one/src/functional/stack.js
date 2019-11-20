var Stack = function() {
  var someInstance = {};
  var tail = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    tail++;
    storage[tail] = value;
  };

  someInstance.pop = function() {
    var removed = storage[tail];
    delete storage[tail];
    tail --;
    return removed;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
