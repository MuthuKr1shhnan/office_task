let n = 4
for(let i = 0; i < n; i++){
    for(let j = 1; j <= n; j++){
        if(i >= j){
            process.stdout.write(" ")
        }else{
            process.stdout.write("*")
        }
    }
    console.log()
}