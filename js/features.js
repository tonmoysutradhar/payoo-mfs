// show the cash out form

// document.getElementById("btn-show-cash-out").addEventListener("click", function() {
//     document.getElementById("cash-out-form").style.display = "block";
    
    
//     // hide the add money form
//     document.getElementById("add-money-form").style.display = "none";
// })


// document.getElementById("btn-show-add-money").addEventListener("click", function() {
//     document.getElementById("cash-out-form").style.display = "none";
    
    
//     // hide the cash out form
//     document.getElementById("add-money-form").style.display = "block";
// })



document.getElementById("btn-show-cash-out").addEventListener("click", function() {
    document.getElementById("cash-out-form").classList.remove ("hidden");
    
    // hide the add money form
    document.getElementById("add-money-form").classList.add ("hidden");
})


document.getElementById("btn-show-add-money").addEventListener("click", function() {
    document.getElementById("add-money-form").classList.remove("hidden");
    
    
    // hide the cash out form
    document.getElementById("cash-out-form").classList.add("hidden");
})