import axios from 'axios';

const API_LOGIN_URL = "http://localhost:8080";

class LoginService{
    checkCredential(user){
        return axios.post(API_LOGIN_URL+'/authenticate', user);
    }
    confirmCall(){
        return axios.get(API_LOGIN_URL+"/dashboard");
    }

}

export default new LoginService();