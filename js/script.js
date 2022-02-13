function getInputValue(inputID){
   const inputField = document.getElementById(inputID);
   const amountText = inputField.value;
   const amount = parseFloat(amountText);
   inputField.value = ''
   return amount;
}

function updateTotalField(totalFieldId, depositInput){
   const depositTotal = document.getElementById(totalFieldId);
   const updateAmountText = depositTotal.innerText;
   const updateAmount = parseFloat(updateAmountText)
   const totalAmount = depositInput + updateAmount;
   depositTotal.innerText = totalAmount;
   return depositTotal;
}

function getCurrentBalance(){
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmountText = balanceTotal.innerText;
   const balanceAmount = parseFloat(balanceAmountText)
   return balanceAmount;
}

function updateBalance(depositInput, isAdd){
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmount = getCurrentBalance();
   if(isAdd == true){
      balanceTotal.innerText = depositInput + balanceAmount ;
   }
   else{
      balanceTotal.innerText =balanceAmount -  depositInput ;
   }
}
document.getElementById('deposit-button').addEventListener('click', function(){
   
   //get deposit amount
   const depositInput = getInputValue('deposit-input');

   if(depositInput>0){
       //update deposit amount
   updateTotalField('deposit-total', depositInput);

   // update account balance
   updateBalance( depositInput, true);
   }
   else{
      alert("The value is not legal");
   }

})

// withdraw handel
document.getElementById('withdraw-button').addEventListener('click', function(){
   
   //withdraw 
   const withdrawAmount = getInputValue('withdraw-input');
   const currentBalance = getCurrentBalance();
   if(withdrawAmount>0 && withdrawAmount< currentBalance){
      //withdraw amount 
   updateTotalField('withdraw-total', withdrawAmount);
   updateBalance(withdrawAmount, false)
   }
   else{
      alert("The value is not legal");
   }

})