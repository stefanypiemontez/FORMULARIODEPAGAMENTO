const form = document.getElementById("form");
const customerName = document.getElementById("customerName");
const cardNumber = document.getElementById("cardNumber");
const cardName = document.getElementById("cardName");
const ecpirationDate = document.getElementById("ecpirationDate");
const securityCode = document.getElementById("securityCode");
const cardBrand = document.getElementById("cardBrand");
const installments = document.getElementById("installments");
const amount = document.getElementById("amount");

form.addEventListener("submit", (e) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const customerNameValue = customerName.value;
  const cardNumberValue = cardNumber.value;
  const cardNameValue = cardName.value;
  const ecpirationDateValue = ecpirationDate.value;
  const securityCodeValue = securityCode.value;
  const cardBrandValue = cardBrand.value;
  const installmentsValue = installments.value;
  const amountValue = amount.value;

  if (customerNameValue === "") {
    setErrorFor(customerName, "É obrigatorio inserir nome do cliente.");
  } else {
    setSuccessFor(customerName);
  }

  if (cardNumberValue === "") {
    setErrorFor(cardNumber, "É obrigatorio inserir o numero do cartão.");
  } else if (cardNumberValue.length < 16) {
    setErrorFor(
      cardNumber,
      "O campo (numero) do cartão não contem 16 digitos."
    );
  } else {
    setSuccessFor(cardNumber);
  }

  if (cardNameValue === "") {
    setErrorFor(
      cardName,
      "É obrigatorio inserir o nome do portador do cartão."
    );
  } else {
    setSuccessFor(cardName);
  }

  if (ecpirationDateValue === "") {
    setErrorFor(
      ecpirationDate,
      "É obrigatorio inserir a data de validade do cartão."
    );
  } else {
    setSuccessFor(ecpirationDate);
  }

  if (securityCodeValue === "") {
    setErrorFor(
      securityCode,
      "É obrigatorio inserir codigo de segurança do cartão."
    );
  } else if (securityCodeValue.length < 3) {
    setErrorFor(securityCode, "Informe os 3 digitos de segurança do cartão.");
  } else {
    setSuccessFor(securityCode);
  }

  if (cardBrandValue === "") {
    setErrorFor(
      cardBrand,
      "O campo inserir a bandeira do cartão é obrigatorio."
    );
  } else {
    setSuccessFor(cardBrand);
  }

  if (installmentsValue === "") {
    setErrorFor(
      installments,
      "É obrigatorio inserir a quantidade de parcelas."
    );
  } else {
    setSuccessFor(installments);
  }

  if (amountValue === "") {
    setErrorFor(amount, "É obrigatorio inserir o valor da transação.");
  } else {
    setSuccessFor(amount);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("Formulario 100% preenchido!!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
