// console.log("withdraw js file connected");
/* 
1.add event handler with withdraw button
2.get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input into a number by using parseFloat

3.Get previous withdraw total

4.calculate total withdraw amount
4.5 set total withdraw amount

5.get the previous balance total

6.calculate new balance total

7.clear the input field
*/

// step no: 1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  //    console.log("withdraw button click");
  // step no: 2
  const newWithdrawField = document.getElementById("Withdraw-field");
  const newWithdrawString = newWithdrawField.value;
  const newWithdrawFloat = parseFloat(newWithdrawString);

  //   step no:7
  newWithdrawField.value = "";

  if (isNaN(newWithdrawFloat)) {
    alert("Please Provide a Valid Amount of tk");
    return;
  }

  // step no:3
  const preWithTotal = document.getElementById("pre-with-total");
  const preWithTotalString = preWithTotal.innerText;
  const preWithTotalFloat = parseFloat(preWithTotalString);
  //   console.log(preWithTotalFloat);

  //   step no:5
  const preBalanceTotal = document.getElementById("balance-total");
  const preBalanceTotalString = preBalanceTotal.innerText;
  const preBalanceTotalFloat = parseFloat(preBalanceTotalString);

  if (newWithdrawFloat > preBalanceTotalFloat) {
    alert("Baaper bank atto tk nai");
    return;
  }

  // step no:4
  const totalWithdrawAmount = newWithdrawFloat + preWithTotalFloat;
  preWithTotal.innerText = totalWithdrawAmount;
  //   console.log(totalWithdrawAmount);

  //   step no:6
  const currentBalanceTotal = preBalanceTotalFloat - newWithdrawFloat;
  preBalanceTotal.innerText = currentBalanceTotal;
});
