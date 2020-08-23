//v2

function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });

    console.log(obj);
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }

  findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
  findOdd([1,1,1,1,1,1,10,1,1,1,1]);


















//v1
// function findOdd(A) {
    
    
//     A.sort((a, b) => a-b)
//     console.log(A);

//     var uniqueArr = [];
//     var counter = 1;

//     for(let i = 0; i < A.length; i++) {
//         if(uniqueArr.includes(A[i])){
//         } else {
//             uniqueArr.push(A[i]);
//         }
//     }

//     for(let i = 0; i < uniqueArr.length; i++) {
//         counter = 0;
//         for(let j = 0; j < A.length; j++){
            
//             if(uniqueArr[i] === A[j]){
//                 counter ++;
//             };
            
//         };
//         if(counter % 2 !== 0){
//             return uniqueArr[i]
//         }
        
//     };
//   };


//   findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
//   findOdd([1,1,1,1,1,1,10,1,1,1,1]);