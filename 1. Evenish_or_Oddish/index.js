let input = 2

function oddishOrEvenish(num){
    let numSum = 0;
    let result = "";
    let string = num.toString().split('');
    let digits = string.map(Number)

    for(let i = 0; i <= digits.length-1; i++){
        numSum += digits[i];
    }
    
    if(numSum % 2 === 0){
        result = "Evenish";
    } else {
        result = "Oddish";
    }
    
    console.log(result)
    return result;
}

oddishOrEvenish(input);
