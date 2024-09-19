document.getElementById("btn-cash-out").addEventListener("click", function (event){
    event.preventDefault();


    const cashOutMoney = document.getElementById("input-cash-out").value;

    const pinNUmber = document.getElementById("input-cash-out-pin").value;
    
    if (pinNUmber === "1234" ) {
        const balance = document.getElementById("acount-balance").innerText;
        
        const newBalance = (+balance) - (+cashOutMoney) ;

        document.getElementById("acount-balance").innerText = newBalance;
    }
    else {
        alert("Failed to Cash Out! Please try again.");
    }
})