function roll(){
    let a = Math.ceil(Math.random()*6)
    let b = Math.ceil(Math.random()*6)
    return `dice a value ${a} \ndice b value ${b}`
}
console.log(roll())