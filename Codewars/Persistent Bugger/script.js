//v2 using while, split, and map().reduce

function persistence(num) {

    var counter = 0;
    num = num.toString();

    while(num.length > 1){
        counter++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    console.log(counter);
}
persistence(22);









//v1
//  function persistence(num) {

//     var output = num;
//     var counter = 0;
//      while(output.toString().length !== 1){  
//          var nums = getNumbers(output);   
//          var output = reduceNums(nums);
//          counter++;        
//      }
  
//      console.log(counter + ' counter');
//      return counter;
   
//  }
 
//  function getNumbers (num) {
//      if(num.toString().length === 1) {
//          return [num];
//      }
//      let digits = num.toString().length;
//      let nums = [];
//      for(let i = 0; i < digits; i++){
//          nums.push(num % 10);
//          num = Math.floor(num / 10);
//      };
//      console.log(nums);
//      return nums;
//  };
 
//  function reduceNums (nums) {
//      s = nums.reduce((acc, i) => acc * i);
//      console.log(s);
//      return s;
//  };
 
 
//  persistence(25);

 