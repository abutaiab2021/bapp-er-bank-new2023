document
  .getElementById("btn-submit")
  .addEventListener("click", function (event) {
    const emailField = document.getElementById("email-field");
    const emailFieldValue = emailField.value;
    // console.log(emailFieldValue);

    const passField = document.getElementById("pass-field");
    const passFieldValue = passField.value;
    // console.log(passFieldValue);

    if (emailFieldValue == "taiab@gmail.com" && passFieldValue == "123") {
      // console.log(emailFieldValue);
      window.location = "bank.html";
    } else {
      alert("please give me your valid email and password");
      // console.log(passFieldValue);
    }
  });
