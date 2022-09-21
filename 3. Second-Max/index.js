function secondMax(N, array){
    array.sort();
    
    return array[array.length-2];
}

console.log(secondMax(4, [4,3,2,1]));

