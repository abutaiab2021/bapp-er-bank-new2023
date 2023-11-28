document.getElementById("btn-exit").addEventListener("click", function () {
  window.location = "bank.html";
});

document.getElementById("btn-bold").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.fontWeight = "bold";
});

document.getElementById("btn-italic").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.fontStyle = "italic";
});

document.getElementById("btn-under").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textDecoration = "underline";
});
document.getElementById("text-left").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "left";
});
document.getElementById("text-right").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "right";
});
document.getElementById("text-center").addEventListener("click", function () {
  const textArea = document.getElementById("text-area");
  textArea.style.textAlign = "center";
});
