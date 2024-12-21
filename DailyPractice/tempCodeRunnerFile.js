function octaltodecimal (num,base){
    let ans = 0;                              
    let pow = 1;

    while(num>0){
        let ld = num % base;
        num = Math.floor(num / base);

        ans = ans + (ld*pow);

        pow = pow*8;
    }
    return ans;
}

let otdrv = octaltodecimal(343,10);
console.log(otdrv);
