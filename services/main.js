const form = document.getElementById("form");
const customerName = document.getElementById("customerName");
const cardNumber = document.getElementById("cardNumber");
const holderName = document.getElementById("holderName");
const expirationDate = document.getElementById("expirationDate");
const securityCode = document.getElementById("securityCode");
const cardBrand = document.getElementById("cardBrand");
const installments = document.getElementById("installments");
const amount = document.getElementById("amount");

form.addEventListener("submit", (e) => {
  event.preventDefault();

  checkInputs();
  createTransaction();
});

function checkInputs() {
  if (customerName.value === "") {
    setErrorFor(customerName, "É obrigatorio inserir nome do cliente.");
  } else {
    setSuccessFor(customerName);
  }

  if (cardNumber.value === "") {
    setErrorFor(cardNumber, "É obrigatorio inserir o numero do cartão.");
  } else if (cardNumber.value.length < 16) {
    setErrorFor(
      cardNumber,
      "O campo (numero) do cartão não contem 16 digitos."
    );
  } else {
    setSuccessFor(cardNumber);
  }

  if (holderName.value === "") {
    setErrorFor(
      holderName,
      "É obrigatorio inserir o nome do portador do cartão."
    );
  } else {
    setSuccessFor(holderName);
  }

  if (expirationDate.value === "") {
    setErrorFor(
      expirationDate,
      "É obrigatorio inserir a data de validade do cartão."
    );
  } else {
    setSuccessFor(expirationDate);
  }

  if (securityCode.value === "") {
    setErrorFor(
      securityCode,
      "É obrigatorio inserir codigo de segurança do cartão."
    );
  } else if (securityCode.value.length < 3) {
    setErrorFor(securityCode, "Informe os 3 digitos de segurança do cartão.");
  } else {
    setSuccessFor(securityCode);
  }

  if (cardBrand.value === "") {
    setErrorFor(
      cardBrand,
      "O campo inserir a bandeira do cartão é obrigatorio."
    );
  } else {
    setSuccessFor(cardBrand);
  }

  if (installments.value === "") {
    setErrorFor(
      installments,
      "É obrigatorio inserir a quantidade de parcelas."
    );
  } else {
    setSuccessFor(installments);
  }

  if (amount.value === "") {
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

// const checkInputs = new Boolean(false);
// if (x) {
//   // é executado
// }

// const checkInputs = false;
// if (x) {
//   // não é executado
// }

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

function createTransaction() {
  const request = {
    MerchantOrderId: "2017051001",
    customer: {
      name: customerName.value,
    },
    payment: {
      Provider: "Simulado",
      Type: "CreditCard",
      capture: "true",
      Authenticate: "false",
      Recurrent: "false",
      Amount: amount.value,
      Installments: installments.value,
      creditCard: {
        CardNumber: cardNumber.value,
        Holder: holderName.value,
        ExpirationDate: expirationDate.value,
        SecurityCode: securityCode.value,
        Brand: cardBrand.value,
      },
    },
  };

  console.log(request);

  fetch("https://apisandbox.braspag.com.br/v2/sales/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      MerchantId: "55f7dc4e-d7fb-4441-8e23-88e2878207db",
      MerchantKey: "PSMGKHEFROKMPVBUHVDDCLXPZLIKSFXFPLTYGXEW",
    },
    body: JSON.stringify(request),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
