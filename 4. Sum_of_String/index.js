function findSum(string){
    let sum = 0;
    let findDigits = /\d+/g;
    let stringArray = string.match(findDigits).join('');
    
    for(let i = 0; i <= stringArray.length-1; i++){
        sum += parseInt(stringArray[i])
    }
    console.log(sum)
    return sum
}

findSum("abc12df34vagag")