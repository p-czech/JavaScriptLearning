
// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...
console.log(slice(1,[1,2,3,4,5,5]));