let n = 4
for(let i =1; i <= n; i++){
    for(let j = i; j <n ; j++){
        process.stdout.write(" ")
    }
    for(let j = 1; j <= i; j++){
        if(j === 1 || j === i || i === n){
            process.stdout.write("*"+" ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log()
}