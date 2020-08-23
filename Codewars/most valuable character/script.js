function solve(st) {
    var arr = st.split('');

    var unique = arr.filter(
        (v, i, a) => a.indexOf(v) === i
        
    );
    console.log(unique);
 
  
    var first = 0;
    var last = 0;
    var value = 0
    var output = unique[0];
 
    //highest value wins;
    for(let i = 0; i < unique.length; i++){
        last = arr.lastIndexOf(unique[i]);
        //console.log('last ' + last);
        for(let j = 0; j < arr.length; j++){
             
            
            if(arr[j] === unique[i]) {
                 first = j;
                 //console.log('first ' + first);
                 break;
            }
            
        }     
        var test = 1;  
        if(last-first > value){
            value = last-first;
            if(valueOf(output) < valueOF(unique[i]))
            output = unique[i]


        }
        
        
    } 
    
    test = 1;
    console.log(output);
    return  output;
}
 
 
  solve('aabccc');
  solve('axyzxyz');
 