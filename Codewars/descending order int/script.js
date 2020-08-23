function descendingOrder(n){
  var arr = n.toString().split('').sort((a, b) => a-b);
  
  var output = arr.pop();
  while(arr.length > 0){
    output += arr.pop(); 
  }
  console.log(output);
  
}

descendingOrder(5423566);
descendingOrder(12134445);