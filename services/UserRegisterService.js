import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8080/user";

class UserRegisterService {


    saveUser(user){
        return axios.post(LOGIN_API_BASE_URL+"/register", user);
    }

    getUser(uemailid,upass){
        return axios.get(LOGIN_API_BASE_URL+"/login/"+uemailid+"/"+upass);
    }

    updateUserPassword(uemailid,user){
        return axios.patch(LOGIN_API_BASE_URL+"/resetpassword/"+uemailid, user);
    }


}

export default new UserRegisterService();