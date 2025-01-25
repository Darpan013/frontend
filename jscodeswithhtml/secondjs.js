// let btn = document.getElementById("btn")

// btn.addEventListener("click", function(){


// })

// let title = document.getElementById("header-title")

// let tag = document.getElementsByTagName("li")

// for(let i = 0; i<tag.length; i++){
//   if(i%2==0){
//     tag[i].style.backgroundColor = "red"
    
//   }else{
//     tag[i].style.backgroundColor = "white"
    
//   }
  
// }

// let title = document.querySelectorAll(".list-group-item")

// console.log(title);


let main = document.getElementById("main")

main.addEventListener("mousemove", function(e){
    console.log(e.clientX / 2 -100, e.clientY,);
    
    document.body.style.backgroundColor =  `rgb(${e.offsetX},${e.clientX / 2 - 100},${e.clientY})`
})

