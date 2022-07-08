"use strict";
exports.__esModule = true;
var sdk_1 = require("@pinata/sdk");
var pinata = (0, sdk_1["default"])("ff78977f93cf390db20c", "2b673b69c0982fe44001fb12be1411876372b29fa9fca2ddf800d556d05d4e07");
var startDate = new Date("01 January 2022 08:00 UTC");
var endData = new Date("01 March 2022 08:00 UTC");
var filters = {
    pinStart: startDate.toISOString(),
    pinEnd: endData.toISOString(),
    pageLimit: 10,
    pageOffset: 0
};
console.log("Grabbing pins.");
pinata
    .pinList(filters)
    .then(function (result) {
    console.log(result);
})["catch"](function (err) {
    console.log(err);
});
