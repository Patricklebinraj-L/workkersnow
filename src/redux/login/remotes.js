import axios from "axios";

const signInRemote = function(){

    async function loginRemote(payload){
        let api = await axios.post("http://localhost:5000/login",payload);
        let res = await api.data;

        return res;
    }


    return {
        loginRemote,
    }


}

export default signInRemote;