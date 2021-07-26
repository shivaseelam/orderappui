export class Order {

    // orderNumber: number;
    // confirmationNo: string;
    // appRefId: string; 
    // trackingNumber: string; 
    // totalAmount: number; 
    // labCode: string;
    // linkageId: string;
    
    // lidParamLastName: string;
    // lidParamDOB: Date;
    // partialAuthorizationAllowed: boolean;
    // timestamp: string;    
    // totalPurchaseAmount: 0;
    // totalTaxAmount: 0;
    // totalShippingAmount: 0;
    // totalRefundAmount: 0;
    // totalPurchaseAmountCharged: 0;
    // totalTaxAmountCharged: 0;
    // totalShippingAmountCharged: 0;
    // totalRefundAmountCharged: 0

    appRefId: string;
    confirmationNo: string;
    orderNumber: string;    
    timestamp: string;   
    totalAmount: string; 
    
    constructor(appRefId: string, confirmationNo: string, orderNumber: string, 
        timestamp: string, totalAmount: string) {
            this.appRefId = appRefId;
            this.confirmationNo = confirmationNo
            this.orderNumber = orderNumber;            
            this.timestamp = timestamp;  
            this.totalAmount = totalAmount;
    }
    
}
