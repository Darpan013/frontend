// function anybasesubstraction(num1,num2,base){
//     let ans =0;
//     let pow = 1;
//     let carry =0;

//     while(num1>0 || num2 > 0){
//         let num1ld = num1%10;
//         let num2ld = num2%10;

//         num1 = Math.floor(num1/10);
//         num2= Math.floor(num2/10);

//         let sd = num1ld+carry-num2ld;

//         if(sd<0){
//             carry = -1;
//             sd = sd + base;
            
//         }else {carry =0;};

//         ans = ans + (sd * pow);
//         pow=pow*10
//     }
//     return ans;

// }

// let rv = anybasesubstraction(4275,2765,8);
// console.log(rv);





// function anybasesaddition(num1,num2,base){
//     let ans =0;
//     let pow =1;
//     let carry = 0;

//     while(num1>0 || num2 >0 || carry >0){
//         let ld1= num1%10;
//         let ld2 = num2%10;

//         num1= Math.floor(num1/10);
//         num2= Math.floor(num2/10);

//         let sum = ld1+ld2+carry;
//         carry = Math.floor(sum/base);

//         sum = sum%base;

//         ans = ans + (sum*pow);

        
//         pow = pow * 10;


        

//     }
//     return ans;


// }

// let rv = anybasesaddition(1005,2007,8)
// console.log(rv);


// --------------












