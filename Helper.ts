class Helper{
    constructor (){
    }

    public encodedToUrl(obj:Object) {
            var stringArray = [];
            for(var p in obj)
                if (obj.hasOwnProperty(p)) {
                    stringArray.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return stringArray.join("&");
    }


}