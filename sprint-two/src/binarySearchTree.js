var BinarySearchTree = function(value) {

	var node = new Nodes(value)
	var binarySearchTree = node;
	 
	binarySearchTree.insert = function(value, obj){
		obj = obj || this;
		var node = new Nodes(value);

		if(value < obj.value){
			obj.left ? obj.insert(value, obj.left) : obj.left = node;
		}
		else{
			obj.right ? obj.insert(value, obj.right) : obj.right = node;
		}
	}

	binarySearchTree.contains = function(value, obj){
		obj = obj || this;
		if(obj.value === value){
			return true
		}
		if(value > obj.value){
			return (obj.right ? obj.contains(value, obj.right) : false)
		}
		else{
			return (obj.left ? obj.contains(value, obj.left) : false)
		}
	}

	binarySearchTree.depthFirstLog = function(cb, obj){
		obj = obj || this;
		console.log(obj)
		cb(obj.value)
		for(var key in obj){
			obj.right && obj.depthFirstLog(cb, obj.right) 
			obj.left && obj.depthFirstLog(cb, obj.left) 
		}
	}
	return binarySearchTree;
};


var Nodes = function(value){
	var node = {};
  node.value = value;
  node.right = null;
  node.left = null;
  return node 
}



/*
 * Complexity: What is the time complexity of the above functions?
 */
