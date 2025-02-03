const log = (msg) => console.log(msg);

// I denna fil skriver ni all er kod

document.querySelector(`#form`).addEventListener(`submit`, function (event) {
  let errorMsg = document.createElement(`p`);
  errorMsg.id = `errorMsg`;
  errorMsg.style.color = `red`;

  const submitBtnRef = document.querySelector(`#submitBtn`);
  submitBtnRef.insertAdjacentElement("afterend", errorMsg);

  try {
    const genderRadios = document.querySelectorAll(`input[name="gender"]`);

    let isSelected = false;

    for (let radio of genderRadios) {
      if (radio.checked) {
        isSelected = true;
        break;
      }
    }
    if (!isSelected) {
      throw new Error(`Du måste välja pojke eller flicka`);
    }
    errorMsg.textContent = ``;
  } catch (error) {
    errorMsg.textContent = error.message;
    alert(error.message);
    log(error.message);
    event.preventDefault();
  }
});
