//ex1
// var func = function() {
//     console.log(this)
// }.bind(1);
 
//  var obj = {
//     callFun : func
//  }
// obj.callFun.call(func());



//ex2
// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.call(1,2,3,4);

// ex3
// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.apply(1,[2,3,4]);


// ex4
// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers(1,2,3,1);
// console.log(sum);

//ex5
// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers.call(1,1,2,3);
// console.log(sum);

// ex6
// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var numbers = [1,2,3];
// var sum = sumOfNumbers.apply(null, numbers);
// console.log(sum);


//ex7 
// var updateZipCode = function (newZip, country) {
//     console.log(newZip + ' ' + country + zipCode.zip);
// };
// var zipCode = {
//     zip: '11787'
// };
// updateZipCode.call(zipCode, '11888', 'us');