var Queue = function() {
  var tail = 1;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var reorderStorage = function (obj) {
    for (var key in obj) {
      obj[key - 1] = obj[key];
      if (obj[key + 1] === undefined) {
        delete obj[key];
      }
    }
    return obj;
  };
  // Implement the methods below
  someInstance.storage = storage;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    var removed = storage[1];
    delete storage[1];
    reorderStorage(storage);
    tail--;
    return removed;
  };
  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
