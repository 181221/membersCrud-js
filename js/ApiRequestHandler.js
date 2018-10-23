

class ApiRequestHandler {

    constructor(){
        this.url_members = "http://localhost:8080/Mservices/data/"
    }

    getAllMembers(){
        return api.xmlRequest('GET', this.url_members + "updates/-1")
    }

    xmlRequest(method, url, body = undefined){
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open(method, url, true);     
        xhr.setRequestHeader( 'Content-Type',   'application/json' );
        xhr.setRequestHeader( 'mode',   "*same-origin");
        xhr.setRequestHeader( 'Acces-Control-Allow-Origin',   "*");

        xhr.onload = () => {
            console.log()
            if(this.status == 200){
                console.log("test")
                console.log("this response", this.responseText)
            }
        }

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log(JSON.parse(xhr.responseText));
                if(url === (url_members+'/updates/-1')){
                    console.log("ok")
                }
            }
        }

        console.log("updated")
        if(typeof body == 'undefined'){
            xhr.send(null);
        }else if(url === (url_members+'/updates/-1')){
            //let thamembers = 
        }
        else {
            xhr.send(JSON.stringify(body));
        }
        console.log("Submit")
        }

}


