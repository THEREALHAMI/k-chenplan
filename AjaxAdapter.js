var AjaxAdapter = (function () {
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
        xhttp.open("GET", url, false);
        xhttp.send();
    };
    AjaxAdapter.prototype.post = function (url, data, successCallBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var text = "Successful";
                successCallBack(text);
            }
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    };
    AjaxAdapter.prototype.put = function (url, data, successCallback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var text = "Successful";
                successCallback(text);
            }
        };
        xhttp.open("PUT", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    };
    AjaxAdapter.prototype.delete = function (url, successCallBack) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var text = "Successful";
                successCallBack(text);
            }
        };
        xhttp.open("DELETE", url, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(null);
    };
    return AjaxAdapter;
}());
