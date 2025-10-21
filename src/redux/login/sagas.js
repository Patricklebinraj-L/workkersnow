import { all, put, take, takeEvery, delay, call, } from "redux-saga/effects";

const ls = localStorage;

const signInSaga = function (constants, actions, remotes) {

    const {

        LOGIN,
        SET_LOADING,
        CLEAR_LOADING,
        CLEAR_RESPONSE,


    } = constants;


    const {

        login,
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

        loginRemote,

    } = remotes;


    function* loginSaga() {

        yield takeEvery(LOGIN, function* login({ payload }) {

            try {
                yield put(setLoading());
                const response = yield call(loginRemote, payload);
                yield delay(3000);
                yield put(makeResponse(response));
                const token = JSON.parse(response?.body)?.token;
                if(token){
                    ls.setItem("token",token);
                }

                yield put(clearLoading());
            }
            catch (err) {
                const response = err?.response?.data;
                yield put(makeResponse(response));
                yield put(clearLoading());
            }

        })

    }





    return function* rootSaga() {

        yield all([
            loginSaga(),

        ])

    }

}

export default signInSaga;