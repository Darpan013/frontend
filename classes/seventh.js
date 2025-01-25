// -------------------------  String  ---------------------------------


/*

# some points that we need to know about strings

first that we understand that string value is almost as equal as array
like for instance we understand that

let name = "darpan"

if we want to know the first character of out name just like we do with array

console.log(name[0])

so it would be d

as like we want out name to print one by one

so we can do it with different loops like for loop, while loop, do while loop, for of loop

for instance for loop

for(let i= 0; i < name.length; i++){
    console.log(name[i])    
}
so it would print one by one
d
a
r
p
a
n


*/


// ----------------------  Check string palindrome  --------------------------------


// function checkpalindrome (name){
//     let spacex = name;
//     let space = name.split("");

//     let st = 0;
//     let end = space.length-1;
//     while(st<end){
//         let temp = space[st];
//         space[st]=space[end]
//         space[end]=temp;

//         st++;
//         end--;
//     }
//     if(space.join("")==spacex){
//         return true;
        
//     }else{
//         return false;
        
//     }
// }

// let rv = checkpalindrome("malayalam");
// console.log(rv);


// ------------   in a different way   -----------------------------


// function swapingword(name){
//     let naam = name.split("")
//     let box = [];

//     for(let maal of naam){
//         box.unshift(maal)
        
//     }
//     return box;
// }
// let rv =swapingword("darpan");
// console.log(rv);


// ----------------------------

