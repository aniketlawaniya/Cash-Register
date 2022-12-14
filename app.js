const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const message = document.querySelector('#error-msg');
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
   if(billAmount.value>0){
    if(cashGiven.value>= billAmount.value){
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);

    }else{
        showMessage('Do you wanna Wash Plates');
    }

   }else{
    showMessage("Invalid Bill Amount")
   }
});

function calculateChange(amountToBeReturned){
    for(let i = 0; i< availableNotes.length;i++){
      const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
      amountToBeReturned = amountToBeReturned % availableNotes[i];
      noOfNotes[i].innerText = numberOfNotes;

    }
}



function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    msg.style.display = "block";
    msg.innerText = msg;
}