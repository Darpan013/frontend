// -----------------------------------  This & ------------------------------------


/*

case 1 - global - this access - window object
case 2 - object - function - method - parent - es5 and child - es5 - this access -? - window object
case 3 - object - function - method - parent - es5 and child - es6 - this access -?- parent funtion
case 4 - object - function - method - parent - es6 and child - es6 - this access -? - window object
case 5 - object - function - method - parent - es6 and child - es5 - this access -? - window object

*/




// ------------------------------------   case 1 - global - this access - window    --------------------------------------------


// console.log(this);
 

// --------- case 2 - object - function - method - parent function 0 es5, child function - es5 - this access -? - window object ---------------


/*

let object = {
    name : "darpan",
    age : 23,
    address : "delhi",
    salary : 10000000,

    fun: function parentfunction(){  // es5
        console.log("i am a parent function ");

        function child(){  // es5
            console.log(this);
        }
        child();
    }
}

console.log(object.fun());

*/


// ---------- case 3 - object - function - method - parent - es5 and child function - es6 - this access -?- parent funtion --------------- 

/*

let obj = {
    name : "darpan",
    age : 23,
    address : "Delhi",
    Salary : 100000,

    fun : function parentfunction(){  // es5
        console.log("i'm a parent function ");

        child=()=>{  // es6
            console.log(this);
        }
        child();
    }
}
console.log(obj.fun());

*/

// ---------------  case 4 - object - function - method - parent - es6 and child - es6 - this access -? - window object --------------------------

// let objects = {
//     name : "darpan",
//     pursuing : "1st year of masters",
//     address : " delhi",
//     salary : 0,

//     funk : parentfunction=()=>{ // es6
//         console.log("i'm a parent function");

//         childfunction=()=>{  // es6
//             console.log(this);
            
//         }
//         childfunction();
//     }
// }
// console.log(objects.funk());


//  ---------------  case 5 - object - function - method - parent - es6 and child - es5 - this access -? - window object --------------------------

// let objects = {
//     name : "darpan",
//     pursuing : "1st year of masters",
//     address : " delhi",
//     salary : 0,

//     funk : parentfunction=()=>{ // es6
//         console.log("i'm a parent function");

//         function child(){  // es5
//             console.log(this);
            
//         }
//         child();
//     }
// }
// console.log(objects.funk());


//----------------------------------------------- to understand how excatly this works ? with previous problems   ---------------------------------------



// let objectfs = {
//     name : "darpan",
//     pursuing : "1st year of masters",
//     address : " delhi",
//     salary : 0,

//     funk : parentfunction=()=>{ // es6
//         console.log("i'm a parent function");

//         function child(){  // es5
//             console.log(this.name);
            
//         }
//         child = child.bind(objects);
//         child();
//     }
// }
// console.log(objectfs.funk());

// ----------------------------------------------------------------------------------------------


