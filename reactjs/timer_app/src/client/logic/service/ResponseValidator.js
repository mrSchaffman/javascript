
export default class ResponseValidator{
    validate=(response)=>{
        if (response.status >=200 || response.status< 300){
            return response;
        }else{
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
        }
    }
}