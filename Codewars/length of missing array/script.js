function getLengthOfMissingArray(arrayOfArrays) {
    // var test = 1;
    // console.log(test.length);

    var lengths = [];
    
    
    if(arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.length === null) {
        console.log('arrayofArrays is 0 or null')
        return 0;
    }
    
    for(let i = 0; i < arrayOfArrays.length; i++){
        if( arrayOfArrays[i] === null ||arrayOfArrays[i].length === 0){
            console.log('array in AOA is empty or null')
            return 0;
        }
    }
    // only works for array of arrays  when arrayOfArrays.length > 1
    for(let i = 0; i < arrayOfArrays.length; i++) {
        lengths.push(arrayOfArrays[i].length); 
    }

    lengths.sort((a, b) => a - b );

    console.log('lengths: ' + lengths);
    for(let i = 1; i < lengths.length; i++) {
        if(parseInt(lengths[i]) - 1 !== lengths[i-1]){
            console.log(lengths[i] - 1 );
            return lengths[i] - 1
        }
    }    
} 
getLengthOfMissingArray( [1] );
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]);
getLengthOfMissingArray([ [ null ], [ null, null, null ] ] );
getLengthOfMissingArray( [ null ] );
getLengthOfMissingArray( [1] );



/* v1 --- if array includes null or 0 it does not pass tests
function getLengthOfMissingArray(arrayOfArrays) {
  console.log(arrayOfArrays);

    if(arrayOfArrays !== null) {
        if(arrayOfArrays.length !== 0){
              if(!arrayOfArrays.includes(null) || !arrayOfArrays.includes([]) ){
                
                const sortedArrays = arrayOfArrays.sort((a,b) => a.length - b.length);
                
                for(let i = 1; i < sortedArrays.length; i++){
                  if(sortedArrays[i].length -1 !== sortedArrays[i-1].length){
                      return sortedArrays[i].length -1;
                  } else if(s)
              } return 0;
              }              
        } else{
            return 0;
        }
    } else{
        return 0;
    }

  } */