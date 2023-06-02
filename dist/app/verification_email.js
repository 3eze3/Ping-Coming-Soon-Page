document.addEventListener("DOMContentLoaded", () => {
  const buttonSend = document.querySelector(".register__send");
  const fieldEmail = document.querySelector(".register__email");
  const messageError = document.querySelector(".register__error");
  buttonSend.addEventListener("click", event => {
    event.preventDefault();
    regexEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (!regexEmail.test(fieldEmail.value)) {
      messageError.classList.add("register__error--active");
      fieldEmail.style.outlineColor = "red";
      setTimeout(() => {
        messageError.classList.remove("register__error--active");
        fieldEmail.style.outlineColor = "#0004";
      }, 2200);
    }
  });
});
