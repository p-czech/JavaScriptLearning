function findOutlier(integers){
    let oddCounter = 0;
    let evenCounter = 0;
    let whatToLookFor

    for( let i = 0; i < 3; i++){
        integers[i]%2 === 0 ? evenCounter++ : oddCounter++    
    }

    var output = oddCounter > evenCounter ? integers.filter(
        el => el%2 === 0
    ) : integers.filter(
        el => el%2 !== 0
    );

    return output[0];
    

}

findOutlier([0, 1, 2])

findOutlier([1, 2, 3])