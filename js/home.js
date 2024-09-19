/*
S-1: add event handler
prevent page reload after form submit

S-2: get money to be added to the account balance

s-3: verify the pin number

*/

// srep 1: add an event handler to the add money button inside the form
document.getElementById("btn-add-money").addEventListener("click", function (event){
    // prevent page reload after form submit
    event.preventDefault();
    console.log("adddddddddd");

    // step 2: get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value ;
    // console.log(addMoneyInput);
    

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value ;
    // console.log(pinNumberInput);

    // step-3: verify pin number

    if (pinNumberInput === "1234" ) {

        // console.log("adding money to your account");
        // step -4: get the current balance 
        const balance = document.getElementById("acount-balance").innerText;
        // console.log(balance);

        //step-5: add addMoneyInput with balance
        const newBalance = (+balance) + (+addMoneyInput);
        // console.log(newBalance);

        //step -6: update the balance in the UI
        document.getElementById("acount-balance").innerText = newBalance;
        
        
    }
    else {
        alert("Failed to add Money! Please try again.")
    }
    
})