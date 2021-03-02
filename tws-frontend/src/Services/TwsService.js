import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/tws/feedback";

class TwsService{
    saveFeedback(feedback){
        return axios.post(API_BASE_URL, feedback);
    }
}

export default new TwsService();