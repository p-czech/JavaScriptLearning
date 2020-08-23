//v2

function findEvenIndex(arr)
{
  for(var i=1; i<arr.length-1; i++) {
    var a  = arr.slice(0, i).reduce((a, b) =>  a+b)
    var b = arr.slice(i+1).reduce((a, b) =>  a+b)
    if(a === b) {
      console.log(i);
      return i;
    }
  }
  return -1;
}




// v1
// function findEvenIndex(arr) {
//   var left = [];
//   var right = [];
  
    
//   for(let i = 0; i < arr.length; i++) {

//     if( i === 0 ) {

//       left = [0]
//       right = arr.slice(i + 1, arr.length)

//     } else {
//       left = arr.slice(0,i);
//       right = arr.slice(i + 1, arr.length)
//     }

//     var rightSum = right.length === 0 ? 0 : right.reduce((a, b) => a + b);
//     var leftSum = left.length === 0 ? 0 : left.reduce((a, b) => a + b);
     
//       if( rightSum === leftSum){
//         console.log(i)
//         return i;
//       }
      
//     }
//     console.log(-1)
//     return -1;

// }



findEvenIndex([7,3,-3])
findEvenIndex([8])
findEvenIndex([8,0])
findEvenIndex([1,2,3,4,3,2,1])
findEvenIndex([1,100,50,-51,1,1])
findEvenIndex([1,2,3,4,5,6])
