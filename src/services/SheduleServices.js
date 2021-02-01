import axios from 'axios';

const SHEDULE_API_BASE_URL = "http://localhost:8080/api/v1/shedules"

class SheduleServices{

    getShedule() {
        return axios.get(SHEDULE_API_BASE_URL);
    }
    createShedule(shedule){
        return axios.post(SHEDULE_API_BASE_URL,shedule);
    }
    getSheduleById(sheduleId){
        return axios.get(SHEDULE_API_BASE_URL+'/'+sheduleId)
    }
    updatShedule(shedule,sheduleId){
        return axios.put(SHEDULE_API_BASE_URL+'/'+sheduleId,shedule);
    }
    deleteShedule(sheduleId){
        return axios.delete(SHEDULE_API_BASE_URL+'/'+sheduleId);
    }
}

export default new SheduleServices();