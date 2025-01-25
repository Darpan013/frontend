function question(array,target){
    let box = [];
    for(let i =0; i<array.length; i++){
        for(let j =i+1; j<array.length; j++){

            if(array[i]+array[j]==target){
                 
                box.push(i);
                box.push(j);
                break;
            }
            
        }
    }
    return box;
}
let rv = question([2,11,7,15],[9])
console.log(rv);

// ------------------------------------------


// let object = {
//     name: "darpan",
//     class: " first year",
//     sex: "male ",
//     place: "haryana",

    
// }

// console.log(object);


// -------------------------------------

// let a = [1,2,3,4,1]


// -----






