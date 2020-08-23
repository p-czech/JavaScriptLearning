// function duplicateEncode(word){
//     var output = word.toLowerCase().split('').map(
//         (v, i, arr) => arr.indexOf(v) === i ? v = '(' : v = ')'
//     )

//     console.log(output.join(''));



// }

function printDuplicates(word) {
//    console.log(word.length !== new Set(word.split('')).size);
    var sequence = '';
    var word = word;
    var word1 = word.slice();

    for(let x = 0; x < word.length; x++) {
        // console.log(word[x]);
        var counter = 0;
        for(let y = 0; y < word.length; y++){
            
            var test  = word[x]
            var test1 = 
            word1[y];
            if(word[x] === word1[y]) {
                counter++
            }
        }
        counter > 0 ? sequence.concat(')') : sequence.concat('(')
    }
    console.log(sequence)
}

printDuplicates('d i n')
printDuplicates('recede');

// duplicateEncode("din");
// duplicateEncode("recede");
