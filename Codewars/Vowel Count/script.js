function getCount(str) {
    var vowelsCount = 0;

    var chars = str.split('')
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for(let i = 0; i <  chars.length; i ++) {
        if(vowels.includes(chars[i])) {
            vowelsCount++
        }
    }

    // enter your majic here
    console.log(vowelsCount);
    return vowelsCount;
  }

  getCount('abracadabra')