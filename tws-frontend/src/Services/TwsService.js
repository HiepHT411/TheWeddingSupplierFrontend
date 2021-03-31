import axios from 'axios';
import authHeader from '../Components/AccountComponent/authHeader';

const API_BASE_URL = "http://localhost:8080/api/tws";

class TwsService{
    saveFeedback(feedback){
        return axios.post(API_BASE_URL+ '/feedback', feedback);
    }

    getFeedback(){
        return axios.get(API_BASE_URL+'/feedback', { headers: authHeader() });
    }

    getAllBlog(){
        return axios.get(API_BASE_URL+'/blog');
    }
    deleteBlog(id){
        return axios.delete(API_BASE_URL+'/blog' +'/'+ id, {headers: authHeader()})
    }
    editBlog(blog, id){
        return axios.put(API_BASE_URL+'/blog/'+id, blog, {headers: authHeader()} );
    }
    createBlog(blog){
        return axios.post(API_BASE_URL+'/blog',blog, {headers: authHeader()});
    }
    getBlog(id){
        return axios.get(API_BASE_URL+'/blog/'+id);
    }
}

export default new TwsService();