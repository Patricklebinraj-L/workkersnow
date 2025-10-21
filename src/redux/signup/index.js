/**
 * records for tables
 */

import actions from "./actions";
import constants from "./constants";
import sagas from "./sagas";
import remotes from "./remotes";
import reducer from "./reducer";

/**
 * @param {string} name
 */
export default function signUp() {

    const actualConstants = constants();
    const actualActions = actions(actualConstants);
    const actualRemotes = remotes();
    const actualReducer = reducer(actualConstants, );
    let actualSagas = sagas(actualConstants, actualActions, actualRemotes, );

    return {
        
        actions: Object.assign({}, actualActions),
        constants: Object.assign({}, actualConstants),
        reducer: actualReducer,
        saga: actualSagas,
        remotes: Object.assign({}, actualRemotes)
    };
}
