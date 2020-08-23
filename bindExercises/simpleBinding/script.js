function list () {
    return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
    return arg1 + arg2;
};


var list1  = (1, 2, 3);

var result1 = addArguments(1, 2);

var leadingThirtysevenList = list.bind(null, 37);

var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList();

var list3 = leadingThirtysevenList(1, 2, 3);

var result2 = addThirtySeven(5);

var result3 = addThirtySeven(5, 10);


console.log(result1);
console.log(result2);
console.log(result3);
console.log(list1);
console.log(list2);
console.log(list3);
