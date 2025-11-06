function twoDigit(){
    let tens = Math.ceil(Math.random()*9)*10
    let twoDigit = tens + Math.ceil(Math.random()*9)
    return twoDigit
}
console.log(twoDigit())