import {all,put,take,takeEvery,delay, call,} from "redux-saga/effects";
import constants from "./constants";

const {SET_LOADING,CLEAR_LOADING} = constants();

function* setLoadingSaga(){

    yield takeEvery(SET_LOADING, function* setLoad(){

        


    })

}

function* clearLoadingSaga(){

    yield takeEvery(CLEAR_LOADING, function* clearLoad(){

        


    })

}



 function* rootSaga(){

    yield all([
        setLoadingSaga(),
        clearLoadingSaga(),
    ])

}

export default rootSaga;