import ResponseValidator from "../../logic/service/ResponseValidator";
import ResponseParser from "../../logic/service/ResponseParser";

let instance;
export default class ClientProxy{
    constructor() {
        if(!instance){
            this.validator = new ResponseValidator();
            this.parser= new ResponseParser();
            instance = this;
        }
        return instance;
    }

     getTimers=(response)=>{
        return fetch("/api/timers",{headers:{Accept:'Application/json'}})
            .then(this.validator.validate)
            .then(this.parser.parse)
            .then(response);
    }
}