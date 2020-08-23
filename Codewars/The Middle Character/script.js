function getMiddle(s) {
  var len = s.length;

  if(len % 2 === 0) {
      console.log(s.slice(len/2-1, len/2 + 1))
      return s.slice(len/2-1, len/2 + 1);
      
  }else {
      console.log(s.slice(Math.floor(len/2), Math.floor(len/2) + 1 ))
      return s.slice(Math.floor(len/2), Math.floor(len/2) + 1 )
  }
}


getMiddle("test")  //es
getMiddle("testing") //t








// version 1 
// function getMiddle(s) {
//     console.log(s.length);
//     console.log(s.length/2 % 2 !== 0 )
//     console.log(s.slice(s.length/2, s.length/2+1))
//     console.log(s.slice(s.length/2, s.length/2+2))
    
       
//     var s = s.length/2 % 2 !== 0 ? s.slice(s.length/2, s.length/2+1) : s.slice(s.length/2, s.length/2+2)
    
//     // console.log(c())
//     return s

    
// }

// getMiddle("tests")