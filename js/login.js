// step - 1 set event handler 
document.getElementById("button-login").addEventListener("click", function(event){
    // step - 2 set default behavior (prevent reloading browser)
    event.preventDefault();

    // step - 3 get the phone number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber);
    // console.log(pinNumber);
    
    // this is temporary
    if (phoneNumber === "555" && pinNumber == "1234") {
        console.log("you are logged in");
        window.location.href = "/home.html"
    }
    else {
        alert ("Wrong phone number or pin");
        
    }
})