//----------------------------------------             Function       ----------------------------------------------------


// --------------------------------------------- Function statement    --------------------------------------------------
// function fname(){
//     console.log("butter");
//     console.log("dishes");
//     console.log("vegetables");
//     console.log("lunch");
// }

// fname();


// function fname(){
//     console.log("name-vikas");
//     console.log("age-28");
//     console.log("address-delhi");
//     console.log("ismarried-false");
    
    
    
    
// }

// fname();


//----------------------------------------  Function expression    - first class member -----------------------------------------------


// let fname=function saymyname(){
//     console.log("name-vikas");
//     console.log("age-28");
//     console.log("address-delhi");
//     console.log("ismarried-false");
    
    
    
    
// }

// fname();


// ---------------------------------  Anonymous function    ----------------------------------------

// let fname = function (){
//     console.log("name-vikas");
//     console.log("age-28");
//     console.log("address-delhi");
//     console.log("ismarried-false");
    
    
// }
// fname();


// ---------------------------------  Return function    ----------------------------------------

// function fname(){
//     console.log("darpan");
    



//     return 10%2;

// }
// let rv = fname();
// console.log(rv);



// function fname(){
//     console.log("hello world");
//     return function(){
//         console.log("i am anonymous");
//         return 10+3;
        
        
//     }
    
// }
// let rv=fname();
// console.log(rv());





// ---------------------------------         Function with parameters and arguments       --------------------------------------


// function fname(name, age , salary , address){
//     console.log(name);
//     console.log(age);
//     console.log(salary);
//     console.log(address);
     
    
// }
// console.log("here's information about darpan");

// fname("his name is darpan",21, 12000, "delhi");

// console.log("here's information about kunwar ");

// fname("kunwar", 25, 35000, "gurgaon")





// function fname(num){
//     return num*num
// }
// let ans = sqr(10);
// console.log(ans);

// let ans2 = fname(12);
// console.log(ans2);





// function fname(value){

//     let nof = 0;
//     for(let num = 2; num <=value-1; num++){
//         if(value % num==0){
//         nof++
//         break;  // for better optimisation and shorten the code work
        
        
        

//     }
// }

// if(nof>0){
//     console.log("not prime");

    
// }else{
//     console.log("prime");
    
// }

// }

// fname(9);


// ----------------------------------    fat arrow function    ----------------------------------------------------


/* 

// types of fat arrow func
// fat arrow func
// fat arrow with return
// fat arrow with implict return


"

dry
moduler code

*/



// ---------------------------------         ES6 - Fat arrown Function            -----------------------------------------




// let fname = ()=>{
//     console.log("name = Darpan");
//     console.log("age = 23");
//     console.log("salary = 10000");
//     console.log("address = Delhi");
// }

// fname();


// ---------------------------------       fat arrow with paramenters           ---------------------------------------------


// let fname= (name, age, qualification, address)=>{
//     console.log("shubh naam = ", name);
//     console.log("aayu = ", age);
//     console.log("qualification = ", qualification);
//     console.log("address = ", address);
// }

// fname("Darpan", 23, "bachelor in computer science", "Delhi");


// let fname = name=>{

//     console.log("name=", name);
//     console.log("name", );
// }
     

// fname("darpan");



// ---------------------------------       fat arrow with return           ---------------------------------------------


// let fname= (name, age , salary)=>{
//     console.log(name, age, salary);
//     return function(){
//         console.log(10+2);
//         return 10;
        
//     }

// }

// let rv = fname("darpan", 23, 100000)
// console.log(rv());
