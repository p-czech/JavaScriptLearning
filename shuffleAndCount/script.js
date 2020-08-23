function shuffle(a) {
    var  b = a.slice(0);
    console.log(b[1]);
    for( let i = 0; i < a.length; i++) {
        b[i] = [b[i], 0];
    }
    console.log(b);
    var j, x, i;
    for (i = b.length - 1; i > 0; i--) {
        
        j = Math.floor(Math.random() * (i + 1));
        x = b[i];
        if(i === j) {
            console.log(i + ' === ' + j + ' is this means that ' + b[j] + ' is equal to  ' + b[i] + '?');
        }
        b[i] = b[j];
        //adding +1 to counters
        b[i][1]++;        
        b[j] = x;
        //adding +1 to counter
        b[j][1]++
        var test = 0;
    }
    return b;
}

shuffle([1, 2, 3, 4, 5, 6]);