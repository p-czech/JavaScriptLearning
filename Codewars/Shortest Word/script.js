// v1
// function findShort(s){

//     const  strings = s.split(' ');

//     var shortest = strings[0].length;
   
//     for(let i = 0; i < strings.length; i++) {
//         if(strings[i].length < shortest) {
//             shortest = strings[i].length
//         } 
//     }
//     return shortest;
// }

// findShort("bitcoin take over the world maybe who knows perhaps")

// v2
function findShort(s){
    console.log(Math.min.apply(null, s.split(' ').map(w => w.length)))
    return Math.min.apply(null, s.split(' ').map(w => w.length));

}
findShort("bitcoin take over the world maybe who knows perhaps")
