var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value)
    if(!list.head){
      list.head = node;
    }
    if(list.tail){
      list.tail.next = node
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    function innerFunction(obj){
      if(obj.value === target){
        return true;
      }
      if(!obj.next){
        return false;
      }
      return innerFunction(obj.next)
    }
    return innerFunction(list.head)

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};