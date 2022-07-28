fetch("https://apisandbox.braspag.com.br/v2/sales/", {
  method: "POST",
  body: JSON.stringify({}),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    MerchantId: "55f7dc4e-d7fb-4441-8e23-88e2878207db",
    MerchantKey: "PSMGKHEFROKMPVBUHVDDCLXPZLIKSFXFPLTYGXEW",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
