// // ---------------------------   decimal  to anybase  ----------------------------


// function decimaltoanybase (num,base){
//     let ans = 0;   // to get the abolute value of coverted value
//     let pow=1;     

//     while(num>0){
//         let rem = num % base;              // to get the remainder 
//         num = Math.floor(num/base);        // to get the integar value of num everytime after divisivle by base
 
//         ans = ans + (rem*pow);             // to make the value of remainder into multiple of ten to  get the absolute value of final answer



//         pow = pow*10;                      // to make the value of of final answer multiple of ten everytime
//     }

//     return ans;                            // to get the the ans
// }

// let dtbrv = decimaltoanybase(37,2)      // to enter to return function
// console.log(dtbrv);


// // ---------------------------   Any base to decimal   ----------------------------


// function anybasetodecimal  (num,base){
//     let ans = 0;                              
//     let pow = 1;

//     while(num>0){
//         let ld = num % 10;
//         num = Math.floor(num / 10);

//         ans = ans + (ld*pow);

//         pow = pow*base;
//     }
//     return ans;
// }

// let atdrv = anybasetodecimal (45,8);
// console.log(atdrv);



// // -------------------------    octane to binary    ----------------


// function octancetobinary (num,base1,base2){
//     let decimal = 0;
//     let power=1;  
//     let pow =1;   
     
    
//     while(num>0){
//         let ld = num % 10;
//         num = Math.floor(num / 10);    
//         decimal = decimal + (ld*power);     
//         power = power*base1;
//     }   
//     let binary =0;
//         while(decimal>0){
//             let rem = decimal % base2;              
//             decimal = Math.floor(decimal/base2);                 
//             binary = binary + (rem*pow);
            
//             pow *= 10
           
//         }
//         return binary;
// }

// let rb = octancetobinary(1776,8,2);
// console.log(rb);



// -------------------------------------------------------




// let given number of octal is 450 we need to convert it into a binary number 


// steps of any base to any base 

// step 1 =  any base to decimal

// step 2 = converted base(10)  to base 2 ( decimal to amybase )



// step 1



function anybasetodecimal(num, base){
    let pow = 1;
    let ans = 0;
    while(num>0){
        let ld = num%10;
        num = Math.floor(num/10);

        ans = ans + (ld*pow);
        pow = pow *base;


    
    }
     return ans;
}

// step 2

function decimaltoanybase(num, base){
    let ans =0;
    let pow = 1;

    while(num>0){
        let rem = num%base;
        num = Math.floor(num/base);

        ans = ans + (rem*pow);
        pow = pow * 10;


    }

    return ans;

}

// step 3

function anybasetoanybase(num, base1, base2){

    let decimalconvertednumber  = anybasetodecimal(num,base1);

    let finalans = decimaltoanybase(decimalconvertednumber,base2);


    return finalans;





}

let rv = anybasetoanybase(343,8,2)
console.log(rv);

