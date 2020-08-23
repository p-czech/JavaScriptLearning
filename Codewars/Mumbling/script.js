//version 2 with native methods

function accum(s) {
    var arr = s.split('');
    var output = [];
    console.log(arr);

    for( let i = 0; i < arr.length; i++) {
        output.push(arr[i].toUpperCase() + Array(i + 1).join(arr[i].toLowerCase()));        
    }
    console.log(output.join('-'));
    return output.join('-')
}

accum('abcd')




//version 1
// function accum(s) {
//     var arr = s.split('');
//     console.log(arr);
//     var output  = '';

//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 1; j <= i+1; j++){
//             if(j === 1){
//                 output += arr[i].toUpperCase()  
//             }else {
//                 output += arr[i].toLowerCase()  
//             }
            
//         }
//         if(i == arr.length-1){
//             break;
//         }

//         output += '-'
//     }
//     console.log(output)
//     return output;
// }
// accum('abcd');