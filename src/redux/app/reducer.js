
import constants from "./constants";

const {SET_LOADING,CLEAR_LOADING} = constants();

const initialState = {
    name:'patrick',
    loading:false,
}

const rootReducer = (state=initialState,action)=>{

    const type = action?.type
    const payload = action?.payload

    switch(type){

        case SET_LOADING:
            return Object.assign(state,{
                loading:true
            })
        case CLEAR_LOADING:
            return  Object.assign(state,{
                loading:false
            })

        default:
            return state
    }


}

export default rootReducer;