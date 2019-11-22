

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  	if(!this._storage.get(index)){
  		this._storage.set(index, []);
  	}
  	this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  result = undefined;
  this._storage.get(index).forEach(function(elm){
  	if(elm[0] === k){
  		return result = elm[1];
  	}
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
    array.forEach(function(elm, i){
  		if(elm[0] === k){
  			array.splice(i, 1);
  		}
  	});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


