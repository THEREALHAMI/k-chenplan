var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.prototype.encodedToUrl = function (obj) {
        var stringArray = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                stringArray.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return stringArray.join("&");
    };
    return Helper;
}());
