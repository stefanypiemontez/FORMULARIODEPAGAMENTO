import creditCardModel from "./creditCardModel";
import customerModel from "./customerModel";
import paymentModel from "./paymentModel";

export default class requestModel {
  MerchantOrderId = "";

  creditCard = new creditCardModel();
  customer = new customerModel();
  payment = new paymentModel();
}
