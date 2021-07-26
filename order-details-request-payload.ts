export class OrderDetailRequestPayload {
    appid: String
    orderconfnum: String
    constructor (appid: string, orderconfnum: string) {
        this.appid = appid;
        this.orderconfnum = orderconfnum;
    }
}