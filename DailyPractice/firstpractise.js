// Odd even check

// let num = 20000;
// if(num%2==0){
//     console.log("number is even");
    
// }else{
//     console.log("number is odd");
    
// }

// positive negative zero

// let num2 = "rb";
// if(num2 > 0){
//     console.log("number is positive");

    
// }else if(num2==0){
//     console.log("number is zero");
    
// }else{
//     console.log("number is negative");
    
// }


// fizz buzz

// let num3 = 15;
// if(num3%15==0){
//     console.log("fizzbuzz");
    
// }else if(num3%5==0){
//     console.log("buzz");
    
// }else if(num3%3==0){
//     console.log("fizz ");
    
// }



// -------------------------------------------------------------------------------------------------





// for(let i = 1; i<=10; i=i+1 ){
//     console.log(2*i);
    
// }


// for(let i=1; i<=50; i++){
//     console.log(i);
// }



// for(let start =1; start <= 100; start=start+2 ){
//     console.log(start);
    
// }


// for(let start =1; start<=100; start++){
//     if(start%2==0){
//         console.log("this is even = ", start );
        
//     } else{
//         console.log("this is odd = ", start );
        
//     }
// }


// for(let row =1; row <=5; row++){
//     for(let star=1; star<=row; star++){
//         process.stdout.write("*"+"    ");
//     }
//     console.log();
    
// } 


// for(let row =1; row <=5; row++){
//     for(let star =1; star <= 5-row+1; star++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }




// let nspace = 3;
// let nstar= 1;
// for(let row =1; row<=4; row++){
//     for(let sp =1; sp <= nspace; sp++ ){

//         process.stdout.write(" ")
//     }
    
//     for(st =1; st<=nstar; st++){
//         process.stdout.write("*")
//     }
//     console.log();
//     nspace--;
//     nstar= nstar+2;
// }




// let nsp=0;
// let nst=9;
// for(let row =1; row <= 5; row++){
//     for(let sp =1; sp <= nsp; sp++){
//         process.stdout.write("  ")
//     }

//     for(let st = 1; st <= nst; st++){
//         process.stdout.write("*"+" ")
//     }

//     console.log();
//     nsp++;
//     nst=nst-2;

// }





// let nsp = 2;
// let nst = 1;

// for(let row = 1; row <=5; row++){
//     for(let sp =1; sp<= nsp; sp++ ){
//         process.stdout.write("     ")
//     }

//     for(let st =1; st <= nst; st++){
//         process.stdout.write("  *  ")
//     }

//     console.log();
//     console.log();
    

//     if(row<3){
//         nsp--;
//     }else{nsp++}

    
//     if(row<3){
//         nst=nst+2;
//     }else{nst=nst-2}
    
// }





// let nsp = 2;
// let nst = 1;
// for(let row = 1; row<= 10; row++){
//     for(let sp =1; sp<= nsp; sp++){
//         process.stdout.write(" ")
//     }

//     for(let st =1; st <= nst; st ++){

//         process.stdout.write("*")
//     }

//     console.log();
//     if( row <3){
//         nsp--;
//         nst=nst+2;
//     } else if( row >7){
//         nsp++;
//         nst=nst-2;
//     } 
// }




// for(let row =1; row <=5; row ++){
//     for(let col =1; col <=5; col ++){
//         if(row + col == 6 || row == col){
//             process.stdout.write("*")
//         } else {
//             process.stdout.write("  ")
//         }

//     }
//     console.log();
    
// }




