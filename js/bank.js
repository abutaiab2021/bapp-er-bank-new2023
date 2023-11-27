document.getElementById("btn-deposit").addEventListener("click", function () {
  //   console.log("deposit button click");
  const depositField = document.getElementById("deposit-field");
  const depositFieldValueString = depositField.value;
  const depositFieldValueFloat = parseFloat(depositFieldValueString);
  //   console.log(typeof depositFieldValueFloat);
  //   console.log(depositFieldValueFloat);

  const previousDeposit = document.getElementById("previous-deposit-text");
  const previousDepositTextString = previousDeposit.innerText;
  const previousDepositTextFloat = parseFloat(previousDepositTextString);

  const totalDepositAmount = previousDepositTextFloat + depositFieldValueFloat;
  //   console.log(typeof previousDepositTextFloat);
  //   console.log(previousDepositTextFloat);
  previousDeposit.innerText = totalDepositAmount;

  const preBalanceTotal = document.getElementById("balance-total");
  const preBalanceTotalString = preBalanceTotal.innerText;
  const preBalanceTotalFloat = parseFloat(preBalanceTotalString);
  //   console.log(typeof balanceTotalFloat);

  const currentBalanceTotal = preBalanceTotalFloat + depositFieldValueFloat;
  preBalanceTotal.innerText = currentBalanceTotal;

  depositField.value = "";
});

// going to discount form
document.getElementById("btn-discount").addEventListener("click", function () {
  window.location = "discount.html";
});

// exit bank from
document.getElementById("btn-exit").addEventListener("click", function () {
  window.location = "index.html";
});
