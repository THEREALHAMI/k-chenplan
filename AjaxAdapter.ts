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

        xhttp.open("GET",url,true);
        xhttp.send();
    }
    post(){

    }
    put(){

    }
    delete(){

    }
}

