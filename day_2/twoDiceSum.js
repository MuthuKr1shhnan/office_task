function roll(){
    let a = Math.ceil(Math.random()*6)
    let b = Math.ceil(Math.random()*6)
    return `Sum of first ${a} and second ${b} dice ${a+b}`
}
console.log(roll())