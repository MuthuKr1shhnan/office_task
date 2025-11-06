function minus(big,...small){
    let result = big
    for(let i = 0; i < small.length; i++){
        result-=small[i]
    }
    return result
}

console.log(minus(10,5,2))