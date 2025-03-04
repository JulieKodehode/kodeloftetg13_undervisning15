const submitButton = document.querySelector("#submitButton");
console.log(submitButton);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  console.log("The submit button is clicked");

  const submitMessage = document.createElement("p");
  submitMessage.textContent = "Thanks for submitting!";
  submitMessage.classList.add("submitMessage");
  console.log(submitMessage);

  const formElement = document.querySelector("#form");
  console.log(formElement);
  formElement.appendChild(submitMessage);
});