// document.getElementById()   // to get the access of that specific id of html code 
// document.getElementsByName() -> return -> []  //  to get a things like a arrya
// document.getElementByTagName() ->return -> []  //
// document.querySelector("")  // single value
// document.querySelectorAll("") 

// -------------------- 


let button = document.getElementById("btn") 



button.addEventListener("click", function(){  // event listener works like it take order only when you "click" or "dblclick", then it return it runs that function
    let box = document.getElementById("textbox").value
    if(parseInt(box)%2==0){  // parseInt makes any string digit to numberic digit
        alert("it's an even number")
    }else if(parseInt(box)%2 >0 ){
        alert("it's an odd number")

    }else{ alert("what you r doing rakhi? first atleast fill the box ")}
    
    
})


let header = document.getElementById("heading");

// console.log(header);


let titlename = document.getElementById("heading")    
titlename.innerHTML = "aanand sir"       // to manipulate html through js

titlename.style.backgroundColor = "red"   // to manipulate css through js

