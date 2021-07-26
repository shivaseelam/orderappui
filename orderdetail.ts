export class OrderDetail {

    confirmationNo: String; 
    totalAmount: number;
    disposition: number;
    originalTrackingNumber: any;

    firstName: String;
    lastName: String;
    email: String;
    phone: String;
    creditCardAmt: any;
    creditCardNo: String;
    creditCardholderName: String;
    creditCardType: String;
    routingNumber: String;
    payMethod: String;    

    linkageId: String;
    appRefId: String;
    lidParamLastName: String;
    lidParamDOB: Date;
    partialAuthorizationAllowed: any;
    payInfoCollected: any;
    callbackUrl: String;
    transactionToken: any;
    timestamp: String;    
    totalPurchaseAmt: any;
    totalPurchaseTaxAmt: any;
    totalShippingAmount: any;
    totalPurchaseRefundAmt: any;
    totalPurchaseAmtCharged: any;
    totalTaxAmount: any;
}
