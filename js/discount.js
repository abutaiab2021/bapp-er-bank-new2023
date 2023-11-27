document.getElementById("btn-discount").addEventListener("click", function () {
  const prePrice = document.getElementById("price-discount");
  const prePriceString = prePrice.innerText;
  const prePriceFloat = parseFloat(prePriceString);

  const percentage = (30 / 100) * prePriceFloat;
  const disAmount = 1000 - percentage;
  //   console.log(disAmount);

  const payAmount = document.getElementById("pay-amount");
  //   const payAmountString = payAmount.innerText;
  //   const payAmountFloat = parseFloat(payAmountString);

  payAmount.innerText = disAmount;
});
// end for discount button

// for copon button
document.getElementById("btn-copon").addEventListener("click", function () {
  //   console.log("copon clicked");
  const coponAmount = document.getElementById("price-copon-amount");
  const coponAmountString = coponAmount.innerText;
  const coponAmountFloat = parseFloat(coponAmountString);
  //   console.log(typeof coponAmountFloat);

  const coponField = document.getElementById("copon-field");
  const coponFieldString = coponField.value;
  //   console.log(coponFieldString);

  if (coponFieldString === "DISC30") {
    const percentage = (30 / 100) * coponAmountFloat;
    const coponDisAmount = 1000 - percentage;

    const coponPayAmount = document.getElementById("copon-pay-amount");
    coponPayAmount.innerText = coponDisAmount;
  } else {
    alert("Please give me a valid copon code");
  }
});
// end

// exit button code start
document.getElementById("btn-exit").addEventListener("click", function () {
  window.location = "bank.html";
});
