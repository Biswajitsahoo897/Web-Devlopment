var fact=1;
let num=6
for (let i = num; num >=0; i--) {
    if (i==0) {
        return 1;
    }
    else{
        return fact*=i
    }    
}
console.log(fact)