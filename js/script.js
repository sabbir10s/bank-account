document.getElementById('deposit-button').addEventListener('click', function(){
   
   //get deposit amount
   const depositInput = document.getElementById('deposit-input');
   const previousAmount = depositInput.value;

   //update deposit amount
   const depositTotal = document.getElementById('deposit-total');
   const updateAmount = depositTotal.innerText;
   const totalAmount = parseFloat(previousAmount) + parseFloat(updateAmount)
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
   const withdrawInput =  document.getElementById('withdraw-input');
   const withdrawAmount = withdrawInput.value;
  

   //withdraw update
   const withdrawTotal = document.getElementById('withdraw-total');
   const updateWithdraw = withdrawTotal.innerText;
   const totalWithdraw = parseFloat(withdrawAmount) + parseFloat(updateWithdraw);
   withdrawTotal.innerText = totalWithdraw;


   //update balance
   const balanceTotal = document.getElementById('balance-total');
   const balanceAmount = balanceTotal.innerText;

   //balance update 
   const updateBalance = parseFloat(balanceAmount) - parseFloat(withdrawAmount);
   
   balanceTotal.innerText = updateBalance;

   //clear withdraw input field 
   withdrawInput.value =''
})