"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pair = (function () {
    function Pair() {
    }
    return Pair;
}());
exports.Pair = Pair;
var Rate = (function () {
    function Rate() {
        this.pair = new Pair;
    }
    return Rate;
}());
exports.Rate = Rate;
var ChangeRate = (function () {
    function ChangeRate() {
    }
    return ChangeRate;
}());
exports.ChangeRate = ChangeRate;
var Service = (function () {
    function Service() {
    }
    return Service;
}());
exports.Service = Service;
var Fee = (function () {
    function Fee() {
        this.service = new Service;
    }
    return Fee;
}());
exports.Fee = Fee;
var ChangeFee = (function () {
    function ChangeFee() {
    }
    return ChangeFee;
}());
exports.ChangeFee = ChangeFee;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZXMtZmVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhdGVzLWZlZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBR0EsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLG9CQUFJO0FBS2pCO0lBQUE7UUFDSSxTQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7SUFLcEIsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLG9CQUFJO0FBUWpCO0lBQUE7SUFLQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLGdDQUFVO0FBT3ZCO0lBQUE7SUFTQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksMEJBQU87QUFXcEI7SUFBQTtRQUVJLFlBQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUcxQixDQUFDO0lBQUQsVUFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksa0JBQUc7QUFPaEI7SUFBQTtJQUtBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFpciB7XG4gICAgbGVmdF9jdXJyZW5jeTogbnVtYmVyO1xuICAgIHJpZ2h0X2N1cnJlbmN5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBSYXRlIHtcbiAgICBwYWlyID0gbmV3IFBhaXI7XG4gICAgYnV5X3JhdGU6IG51bWJlcjtcbiAgICBzZWxsX3JhdGU6IG51bWJlcjtcbiAgICBjcmVhdGVfZHQ6IHN0cmluZztcbiAgICBhY3RpdmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VSYXRlIHtcbiAgICBwazogc3RyaW5nO1xuICAgIHBhaXI6IHN0cmluZztcbiAgICBuZXdfYnV5X3JhdGU6IG51bWJlcjtcbiAgICBuZXdfc2VsbF9yYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwaWN0dXJlOiBzdHJpbmc7XG4gICAgY29uc3RfZmVlOiBudW1iZXI7XG4gICAgcGVyY2VudF9mZWU6IG51bWJlcjtcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIG9wZXJhdGlvbl90eXBlOiBzdHJpbmc7XG4gICAgc2VydmljZV90eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBGZWUge1xuICAgIHBrOiBzdHJpbmc7XG4gICAgc2VydmljZSA9IG5ldyBTZXJ2aWNlO1xuICAgIGNvbnN0X2ZlZTogbnVtYmVyO1xuICAgIHBlcmNlbnRfZmVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VGZWUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc2VydmljZTogc3RyaW5nXG4gICAgY29uc3RfZmVlOiBudW1iZXI7XG4gICAgcGVyY2VudF9mZWU6IG51bWJlcjtcbn1cbiJdfQ==