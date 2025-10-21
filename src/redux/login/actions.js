

const actions = (constants) => {

    const { LOGIN ,
        SET_LOADING,
        CLEAR_LOADING ,
        RESPONSE ,
        CLEAR ,
    
        SET_SUCCESS,
        SET_ERROR,
        CLEAR_SUCCESS,
        CLEAR_ERROR,
        CLEAR_RESPONSE,
    
    } = constants;

    function login(payload) {

        const action = {
            type: LOGIN,
            payload: payload,
        };


        return action;
    }





function makeResponse (payload){
    const action = {
        type: RESPONSE,
        payload: payload,
    }
    return action;
}

function setLoading(){
    const action = {
        type: SET_LOADING,
    }

    return action;
}

function clearLoading(){
    const action = {
        type: CLEAR_LOADING,
    }

    return action;
}

function clear(){
    const action = {
        type: CLEAR,
    }
    return action;
}

function setSuccess(){
    const action = {
        type : SET_SUCCESS,
    }
    return action;
}
function clearSuccess(){
    const action = {
        type : CLEAR_SUCCESS,
    }
    return action;
}
function setError(){
    const action = {
        type : SET_ERROR,
    }
    return action;
}
function clearError(){
    const action = {
        type : CLEAR_ERROR,
    }
    return action;
}

function clearResponse(){
    const action = {
        type: CLEAR_RESPONSE,
    }
    return action;
}



return {
    login,
    setLoading,
    clearLoading,
    makeResponse,
    clear,
    setSuccess,
    setError,
    clearSuccess,
    clearError,
    clearResponse,
}

}

export default actions;