/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  if (size > storage.length) {
    storageLimit = storageLimit * 2;
    for (var i = 0; i < storage.length; i++) {
    this.insert(storage[i][0], storage[i][1]); // throwing errors in console, out of time
    }
  }
  
  result.insert = function(k, v 
) {
    // TODO: implement `insert`
    /*
    things to keep in mind: when inserting, make sure to check and see if key already exists, replace value

    store index in variable
    need to create bucket for tuples
    if bucket does not exist 
      create bucket 
        iterate over bucket 
        create tuple 
          if tuple[0] is equal to key 
            set tuple[1] as value
            push tuple to the bucket
          if key already exists
            replace existing value with new value
    */
    var index = getIndexBelowMaxForKey(k, storageLimit);
    var bucket = storage[index];
    
    if (!bucket) {
      bucket = [];
      storage[index] = bucket;
    }
    
    var keyExists = false;
    
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = v;
        keyExists = true;
      }
    }
    
    if(!keyExists) {
      bucket.push([k, v]);
      size++; // increase size
    }
  };

  result.retrieve = function(k 
) {
    // TODO: implement `retrieve`
    /*
    store index in variable
    create bucket with storage[index]
    iterate over bucket
        if tuple[0] === key
          return tuple[1]
    if bucket does not exist 
    return null
    */
   var index = getIndexBelowMaxForKey(k, storageLimit);
   var bucket = storage[index];
   if (bucket.length > 0) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return null;
  };

  result.remove = function(k 
) {
    // TODO: implement `remove`
    /*
    store index in variable
    create bucket with storage[index]
    iterate over bucket
      if(tuple[0] === key) 
        bucket.splice i, 1 
      return tuple[1]
    */
   var index = getIndexBelowMaxForKey(k, storageLimit);

   var bucket = storage[index];
   for (var i = 0; i < bucket.length; i++) {    
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
    return bucket[i][1];
    }
  };

  return result;
};
