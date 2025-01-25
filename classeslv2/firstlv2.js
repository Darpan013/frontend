// -----------------------------------------------     prototype by using this     ----------------------------------------------------------

// function DiceStudent(name,age, batch, qualification, fee, others){
//     this.naam=name;
//     this.umar=age;
//     this.batch=batch;
//     this.qualification=qualification;
//     this.fee=fee;
//     this.other=others;

// }

// let darpan = new DiceStudent("darpan",23,"full stack developer",{
//     secondary: `By CBSE board with 68%`,
//     SeniorSecondary: "By CBSE board with 70% "

// },{
//     october:true,
//     November:true,
//     December:true,
//     January:false
// }, function(){
//     console.log(`${this.naam} is a sicere boy of Dice institute`);
//     return "also a handsome a boy of dice institute"
    
// })
// console.log(darpan);



// -----------------------------------------------      Class without constructor     -----------------------------------------------------

// class DiceStudent{
//     name;
//     age;
//     place;
//     batch;
//     printdetails() {
//         console.log(`He is in batch  ${this.batch}`);
//         return "Hii i'm a function"
//     }
// }

// let shreyansh =new DiceStudent();
// shreyansh.name="shreyansh";
// shreyansh.age=18;
// shreyansh.place="Kannauj UP"
// shreyansh.batch="animation and motion"
// shreyansh.printdetails();
// console.log(shreyansh);

// console.log("---------------------------------");

// let darpan = new DiceStudent();
// darpan.name="darpan"; darpan.age=23; darpan.place="bhiwani haryana"; darpan.batch="full stack developer"; darpan.printdetails();
// console.log(darpan);

// console.log("------------------------------------");

// let pawan = new DiceStudent()
// pawan.name="pawan"; pawan.age=23; pawan.place="delhi"; pawan.batch="full stack developer"; pawan.printdetails()
// console.log(pawan);


// ---------------------------------------------      Class with constructor           ------------------------------------------

// class DiceStudent{
//     naam="";
//     umar= [];
//     place = "Delhi";
//     #batch=""   //  to make it privae
//     constructor(name,age,place,batch){
//         this.naam=name;
//         this.umar=age;
//         this.place=place;
//         this.#batch= batch;    // to make it private
//     }
//     printdetails() {
//         console.log(`He is in batch ${this.#batch}`);  // to access the private things
//         return "Hii i'm a function"
//     }
// }

// console.log(" --------------- Shreyansh ------------------");


// let shreyansh =new DiceStudent("shreyansh", 18, " Delhi Panchseel Vihar C 17", "Anmation and Motion" );
// console.log(shreyansh);
// shreyansh.printdetails();

// console.log("----------------Darpan  -----------------");

// let darpan = new DiceStudent('darpan',23, {
//     basically : "From Haryana",
//     Now : "Delhi"
// },"full stack developer");
// console.log(darpan);

// console.log("------------------   Pawan  ------------------");

// let pawan = new DiceStudent("pawan",23,"delhi","full stack developer")
// console.log(pawan);


// -----------------------------------------------------------------------------------------------------

// // ------------  OOPS ( Object oriented programming system) ------------------


// function Createhuman(n,g){
//     this.name = n,
//     this.gender = g
// }
// let blackwidow = new Createhuman("Black widow", "female")
// console.log(blackwidow);
