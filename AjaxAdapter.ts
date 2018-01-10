class AjaxAdapter implements IAjaxAdapter{

    constructor() {

    }
    get(url, successCallback){
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
<<<<<<< HEAD

=======
>>>>>>> Chris
                  let data =   JSON.parse( xhttp.responseText);
                    successCallback(data);
            }
        });

        xhttp.open("GET",url,true);
        xhttp.send();
    }
    post(url, data, successCallBack){
<<<<<<< HEAD
        var xhttp = new XMLHttpRequest();
=======
        let xhttp = new XMLHttpRequest();
>>>>>>> Chris
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Successfully"
                successCallBack(text);
            }
        };
        xhttp.open("POST",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
    put(url, data, successCallback){
<<<<<<< HEAD
        var xhttp = new XMLHttpRequest();
=======
        let xhttp = new XMLHttpRequest();
>>>>>>> Chris
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Successfully";
                successCallback(text);
            }
        };
        xhttp.open("PUT",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(data);
    }
    delete(url,successCallBack){
<<<<<<< HEAD
        var xhttp = new XMLHttpRequest();
=======
        let xhttp = new XMLHttpRequest();
>>>>>>> Chris
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let text = "Employee deleted";
                successCallBack(text);
            }
        };
        xhttp.open("DELETE",url,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(null);
    }
}

