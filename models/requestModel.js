import addressModel from "./addressModel";
import cardOnFileModel from "./cardOnFileModel";
import credentialsModel from "./credentialsModel";
import creditCardModel from "./creditCardModel";
import customerModel from "./customerModel";
import deliveryAddressModel from "./deliveryAddressModel";
import extraDataCollectionModel from "./extraDataCollectionModel";
import paymentModel from "./paymentModel";

export default class requestModel {
  MerchantOrderId = "";

  address = new addressModel();
  cardOnFile = new cardOnFileModel();
  credentials = new credentialsModel();
  creditCard = new creditCardModel();
  customer = new customerModel();
  deliveryAddress = new deliveryAddressModel();
  extraDataCollection = new extraDataCollectionModel();
  payment = new paymentModel();
}
