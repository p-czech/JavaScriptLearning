// input: names - unsorted strings
// output: case-agnostic sort
sortme = function( names ){

console.log( names.sort(
    (a, b) => a.toLowerCase().localeCompare(b.toLowerCase())
))
}


  sortme([ 'Hello', 'there', 'I\'m', 'fine' ])