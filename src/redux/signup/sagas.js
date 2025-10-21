import { all, put, take, takeEvery, delay, call, } from "redux-saga/effects";


const signUpSaga = function (constants, actions, remotes) {

    const {

        ADD_USER,
        SET_LOADING,
        CLEAR_LOADING,
        CLEAR_RESPONSE,


    } = constants;


    const {

        addUser,
        setLoading,
        clearLoading,
        makeResponse,
        clear,
        setSuccess,
        setError,
        clearSuccess,
        clearError,

    } = actions;


    const {

        addUserRemote,

    } = remotes;


    function* addUserSaga() {

        yield takeEvery(ADD_USER, function* addUser({ payload }) {

            try {
                yield put(setLoading());
                const response = yield call(addUserRemote, payload);
                yield delay(3000);
                yield put(makeResponse(response));
                yield put(clearLoading());
            }
            catch(err){
                const response = err?.response?.data ;
                yield put(makeResponse(response));
                yield put(clearLoading());
            }

    })

    }





    return function* rootSaga() {

        yield all([
            addUserSaga(),

        ])

    }

}

export default signUpSaga;