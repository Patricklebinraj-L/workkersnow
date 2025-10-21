import axios from "axios";

const signUpRemote = function(){

    async function addUserRemote(payload){

        let api = await axios.post("http://localhost:5000/",payload);
        let res = await api.data;

        return res;
        
    }


    return {
        addUserRemote,
    }


}

export default signUpRemote;