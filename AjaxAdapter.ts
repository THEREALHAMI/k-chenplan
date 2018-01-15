class AjaxAdapter implements IAjaxAdapter{

    constructor() {

    }
    get(url, successCallback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                  let data =   JSON.parse( xhttp.responseText);
                    successCallback(data);
            }
        });

        xhttp.open("GET",url,false);
        xhttp.send();
    }
    post(url, data, successCallBack){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Successful";
                successCallBack(text);
            }
        };
        xhttp.open("POST",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
    put(url, data, successCallback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Successful";
                successCallback(text);
            }
        };
        xhttp.open("PUT",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
    delete(url,successCallBack){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Successful";
                successCallBack(text);
            }
        };
        xhttp.open("DELETE",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(null);
    }
}

