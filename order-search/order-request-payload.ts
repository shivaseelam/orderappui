export class OrderRequestPayload {
    appid: String
    startdate: String
    enddate: String
    constructor (appid: String, startdate: String, enddate: String) {
        this.appid = appid;
        this.startdate = startdate;
        this.enddate = enddate;
    }
}