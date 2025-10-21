
const reducer = (constants) => {

    const initialState = {
        data: {},
        response: {},
        loading: false,
        success: false,
        error: false,
    }

    const {
        LOGIN,
        SET_LOADING,
        CLEAR_LOADING,
        RESPONSE,
        CLEAR,
        SET_SUCCESS,
        SET_ERROR,
        CLEAR_SUCCESS,
        CLEAR_ERROR,
        CLEAR_RESPONSE,
    } = constants;

    const rootReducer = (state = initialState, action) => {

        const type = action?.type
        const payload = action?.payload

        switch (type) {

            case LOGIN:
                return {
                    ...state,
                    data: payload,
                }
            case RESPONSE:
                return {
                    ...state,
                    response: payload,
                }

            case SET_LOADING:
                return {
                    ...state,
                    loading: true,
                }

            case CLEAR_LOADING:
                return {
                    ...state,
                    loading: false,
                }
            case SET_SUCCESS:
                return {
                    ...state,
                    success: payload,
                }

            case CLEAR_SUCCESS:
                return {
                    ...state,
                    success: false,
                }
            case SET_ERROR:
                return {
                    ...state,
                    error: payload,
                }

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: false,
                }

            case CLEAR:
                return {
                    ...state,
                    loading: false,
                    success: false,
                    error: false,
                }

            case CLEAR_RESPONSE:
                return {
                    ...state,
                    loading: false,
                    success: false,
                    error: false,
                    response:{
                        body:state?.response?.body,
                    },
                }

            default:
                return state
        }


    }

    return rootReducer;

}

export default reducer;