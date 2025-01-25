//  ------------------------------------         Array   --------------------------------------------



//------------------------------------------  Diffent works in a array  ------------------------------------------------------

/*

#  name.pop() =  do remove last element in array box
#  name.shift() = do remove first element in array box

#  name.push() = do add element in last position of array box
#  name.unshift() = do add element in first position of a array box


#  name.includes( any element name  ) = gives boolean values ( true or false ) of after checking that particular element in array

here are some few instance of .includes 

let rv= marks.includes("darpan")
console.log(rv);

let rb= marks.includes("puneet")
console.log(rb);

#  name.indexof(" any element name ")  =  gives the number of index number in array of element

here's a instance of name.indexof()

console.log(marks.indexOf("darpan")); which would give the index number element "darpan" in array marks,
if it's find that element is in array then it gives the number of indes else gives -1 in return



#  name.slice(2,8)   gives the number between these two number from 0 to length of array. in which 2 in iclusive number
where 8 would be excusive number. let explain with an example 

let numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers.slice(2,5)).
It would count the second value of array numbers #(because initial value in slice method is 
inclusive which would start adding number from 3 in array ( because in js counting would start from 0 to length) and it won't 
count the 5th value #(because it's a exclusive number so it would count the value till 4th number of array) )
so output would be 3,4,5


#  name.splice(1,2,3,4)  
In splice method the first value is to tell the starting point of array,
then the second value is to define how many value we want to remove in our array from initial value in array
then the third and fourth values are to tell to add 3rd and 4th value in that space we removed


*/




// let arr = [ 1, 2, 3, 4, 5];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }

// ------- push  -------

// let arr = [1, 2, 3, 4, 5,]

// arr.push(6)

// console.log(arr);

// ---------





// const arr = [2, 24, 45, 65, 44, 34];

// function onlyevennumbers(){

//     let result = []
    

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i]%2==0){
//             result.push(arr[i]);

//         }

        
        
//     }
//     return result;
// }
// let rv = onlyevennumbers();
// console.log(rv);


//-----------------------------------

// let names = [ "darpan", "kanwar", "anurag", "lokesh", "raj", "jar"];

// function findthreenumbername(){
//     for(let i =0; i < names.length; i++){
//         if(names[i].length==3 ){
//             console.log(names[i]);
        
            
//         }
//     }

// }

// findthreenumbername();

//------------------ slice method instances  ------------------------

// let elements = [1,2,3,4,"darpan", "jagdish",86,[1,2,3,4] ]

// let rb = elements.slice(2,5);
// console.log(rb);

// let rv = elements.slice(1,-1);
// console.log(rv);

//  --------------------- splice methd instances  ------------------------------------------


// let numbers = [0,1,"shalok","atul",2,3,4,5,6,7];


// numbers.splice(2,2,"darpan","rajput");
// console.log(numbers);





// ----------------------------- Array traversal different methods  --------------------------------------------------

// let marks = [1, 2, 3, 4, 5, "darpan", [1,2,3,4], function(){console.log("i am a function")}, "puneet"];

// console.log("------------ for loop traversal ------------------"); 

// for(let i =0; i < marks.length; i++){
//         console.log(marks[i]);
    
//     }
    
// console.log("------------ while loop traversal ------------------"); 
    
 
// let a = 0;
    
// while(a<marks.length){
//     console.log(marks[a]);

//     a++

// }


// console.log("------------do while loop traversal ------------------"); 

// let b = 0;

// do{
//         console.log(marks[b]);
//         b++
    
//     }while(b < marks.length)
    
//     console.log("------------for of loop traversal ------------------");
            
            

// for(let elements of marks){
//     console.log(elements);
    
// }


// console.log("------------  forEach loop traversal ------------------");

// marks.forEach(function(element){
//     console.log(element);
    

// })

// marks.forEach(items=> console.log(items)
// )

// // by fat arrow function


// marks.forEach((elementss)=>{

//     console.log(elementss);
// })
    


