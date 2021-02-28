import axios from 'axios';

const API_BASE_URL = "http://locahost:8080/api/tws";

class TwsService{
    saveFeedback(feedback){
        return axios.post(API_BASE_URL, feedback);
    }
}

export default new TwsService();