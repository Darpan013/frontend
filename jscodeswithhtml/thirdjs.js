// Features

// add items
// read items
// delete item
// update item

// ----------------
// add items

let btn = document.getElementById("btn") // to acces the usage of button thorugh button id

let ul = document.getElementById("items")

ul.addEventListener("dblclick", function(crazy){
    ul.removeChild(crazy.target)
    
    

})

btn.addEventListener("click", function(){    // just a event listener to perform a task(function) by clicking on button
    let txtbox = document.getElementById("txtbox").value  // to acces the entered value in textbox
    
    if(txtbox.length===0){      // just for a condition if textbox is empty then to give alert please enter value
        alert("please insert some text")   
    }else {
        let list = document.getElementById("items");  // to acces the lists to add items
        let li = document.createElement("li")        // created a li tag to give a li tag to entered item name
        li.appendChild(document.createTextNode(txtbox))  //  to put the items(txtbox) in list(li) 
        li.className = "list-group-item"
        list.appendChild(li)
        document.getElementById("txtbox").value = ""  // to blank the value of textbox agian after completion of adding item 
        
    }
    
})
