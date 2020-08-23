function stockList(listOfArt, listOfCat){
    if(!listOfCat || !listOfArt) {
        return ""
    }
    let result = '';
    for(let i = 0; i < listOfCat.length; i++){
        var catSum = 0;
        var category = listOfCat[i];
        for(let j = 0; j < listOfArt.length; j++){
            var splitted = listOfArt[j].split(' ');            
            if(splitted[0][0] === listOfCat[i]){
                catSum += Number(splitted[1]);
            }
        }
        result += '('+ category + ' : ' + catSum + ')'
        if(i < listOfCat.length - 1 ){
            result += ' - '
        }
    }
    console.log(result);
    return result
    
  }

  listOfArt = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
  listOfCat = ["A", "B"]
  stockList(listOfArt, listOfCat);

/*
b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
*/
