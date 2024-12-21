//---------------------------------------      loops number traversal   ------------------------------------------------


// let num = 123456789;
// while(num>0){
//     console.log(num%10);
//     num = Math.floor(num/10);
    
// }


// for(let number = 9887654321; number>0; number=Math.floor(number/10)){
//     console.log(number%10);
    
// }




// let digits = 0;

// for(let num = 123456789; num>0; num = Math.floor(num/10)){
    
//     digits++
// }

// console.log(digits);




// let number = 1234567;
// let nod = 0;
// while(number>0){
//     number=Math.floor(number/10)
//     nod++
// }
// console.log(nod);





// let number = 1112222;
// let even = 0;
// let odd = 0;
// while(number>0){
//     let ld = number%10;
//     if(ld%2==0){
//         even++   
//     } else{ odd++}

//     number=Math.floor(number/10);
// }

// console.log("even numbers are",even);
// console.log("odd numbers are ",odd);





// let number=1234;
// let sum=0;
// while(number>0){
//     sum = sum + number%10;
    
//     number=Math.floor(number/10);
// }
// console.log(sod);


// let number = 123456;
// while(number>0){
//     let ld = number%10;
//     console.log(ld);
    

//     number=Math.floor(number/10)
// }






// let num = 958833;
// let temp =num;
// let nod = 0;
// while(temp>0){
//     nod++

//     temp=Math.floor(temp/10)
// }

// let div = Math.pow(10, nod-1)

// while(num>0){
//     let fd = Math.floor(num/div);
//     console.log(fd);

//     num=num%div;

//     div=div/10;

// }





// let num = 9987654321;

// while(num>0){
//     let ld = num%10;
//     console.log(ld);
//     num = Math.floor(num/10)
    
// }






for(let row  = 1; row<=7; row++){
    for(let column = 1; column<=7; column++ ){
        if(row==1){
            if(column==1 || column >=4){
                process.stdout.write("*")
            }else{process.stdout.write(" ")}

        }else if (row >1 && row < 4){
            if(column == 1 || column == 4){
                process.stdout.write("*")
            } else{process.stdout.write(" ")}
            

        } else if (row == 4){
            process.stdout.write("*")


        }else if (row > 4 && row < 7){
            if(column == 4 || column == 7){
                process.stdout.write("*")
            } else {process.stdout.write(" ")}

        } else if (row == 7){
            if(column <= 4 || column == 7){
                process.stdout.write("*")
            }else {process.stdout.write(" ")}

        }
    }

    console.log();
    
}





