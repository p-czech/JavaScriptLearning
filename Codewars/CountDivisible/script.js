function divisibleCount( x, y, k) {

  let counter = Math.round(y/k - x/k)

  console.log(counter)
}

divisibleCount(101, 9007199254740991, 11);





// v1

/*function divisibleCount(x, y, k) {

  var arr = []
  if( x <= y){
    for( var i = x; i <= y; i++){
      arr.push(i);
    }
  
    var output =  arr.filter(
      (element) => element % k === 0
    ).length;
  
    console.log(output);
    return output;
  
  }
  
} */