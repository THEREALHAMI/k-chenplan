var AjaxAdapter = /** @class */ (function () {
    function AjaxAdapter() {
    }
    AjaxAdapter.prototype.get = function (url, successCallback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = (function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var data = JSON.parse(xhttp.responseText);
                successCallback(data);
            }
        });
        xhttp.open("GET", url, true);
        xhttp.send();
    };
    AjaxAdapter.prototype.post = function () {
    };
    AjaxAdapter.prototype.put = function () {
    };
    AjaxAdapter.prototype.delete = function () {
    };
    return AjaxAdapter;
}());
