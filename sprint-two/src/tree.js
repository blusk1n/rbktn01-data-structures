var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
	function innerFunction(obj, result){
		result = result || false;
		if(obj.value === target){
			return result = true;
		}else if(obj.children.length){
			obj.children.forEach(function(elm){
				if(!result){
				result = innerFunction(elm, result);
				}else{
					return result;
				}
			});	
		}
		return result
	}
	return innerFunction(this)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
