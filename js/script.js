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

function updateBalance(balanceFieldId, depositInput){
   const balanceTotal = document.getElementById(balanceFieldId);
   const balanceAmountText = balanceTotal.innerText;
   const balanceAmount = parseFloat(balanceAmountText)
   balanceTotal.innerText = depositInput + balanceAmount ;

}
document.getElementById('deposit-button').addEventListener('click', function(){
   
   //get deposit amount
   const depositInput = getInputValue('deposit-input');

   //update deposit amount
   updateTotalField('deposit-total', depositInput);

   // update account balance
   updateBalance('balance-total', depositInput);

})

// withdraw handel
document.getElementById('withdraw-button').addEventListener('click', function(){
   
   //withdraw 
   const withdrawAmount = getInputValue('withdraw-input');

   //update withdraw
   updateTotalField('withdraw-total', withdrawAmount);

   //update balance
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmount = balanceTotal.innerText;

   //balance update 
   const updateBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
   
   balanceTotal.innerText = updateBalance;

})