function getInputValue(inputID){
   const inputField = document.getElementById(inputID);
   const amountText = inputField.value;
   const amount = parseFloat(amountText);
   inputField.value = ''
   return amount;
}


document.getElementById('deposit-button').addEventListener('click', function(){
   
   //get deposit amount
   const depositInput = getInputValue('deposit-input');

   //update deposit amount
   const depositTotal = document.getElementById('deposit-total');
   const updateAmount = depositTotal.innerText;
   const totalAmount = depositInput + parseFloat(updateAmount)
   depositTotal.innerText = totalAmount;

   // update account balance
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmount = balanceTotal.innerText;
   const updateBalance = parseFloat(totalAmount) + parseFloat(balanceAmount);
   balanceTotal.innerText = updateBalance;

   //clear input field 
   depositInput.value = ''
})

// withdraw handel

document.getElementById('withdraw-button').addEventListener('click', function(){
   
   //withdraw 
   const withdrawAmount = getInputValue('withdraw-input');

   //withdraw update
   const withdrawTotal = document.getElementById('withdraw-total');
   const updateWithdraw = withdrawTotal.innerText;
   const totalWithdraw = withdrawAmount + parseFloat(updateWithdraw);
   withdrawTotal.innerText = totalWithdraw;


   //update balance
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmount = balanceTotal.innerText;

   //balance update 
   const updateBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
   
   balanceTotal.innerText = updateBalance;

})