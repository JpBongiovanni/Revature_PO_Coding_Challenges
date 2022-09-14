function doubleSwap(string, c1, c2){
    let newString = '';
    for(let i = 0; i <= string.length-1; i++){
        
        if(string[i] == c1){
            newString += c2;
            continue;
        } else if(string[i] == c2){
            newString += c1;
            continue;
        } else {
            newString += string[i];
        }
    }
    console.log(newString);
    return newString;
}


doubleSwap("random w#rds writt&n h&r&", "#", "&")