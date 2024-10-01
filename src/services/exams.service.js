import http from "../shared/services/http-common.js";

export class ExamsService{
    resourceEndpoint = "/mentalStateExams";

    getAll(){
        return http.get(this.resourceEndpoint);
    }

    getById(id){
        return http.get(`${this.resourceEndpoint}/${id}`);
    }

}