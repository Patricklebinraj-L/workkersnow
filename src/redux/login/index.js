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
export default function signUp(name) {

    const actualConstants = constants(name);
    const actualActions = actions(actualConstants);
    const actualRemotes = remotes(name);
    const actualReducer = reducer(actualConstants, name);
    let actualSagas = sagas(actualConstants, actualActions, actualRemotes, name);

    return {
        name,
        actions: Object.assign({}, actualActions),
        constants: Object.assign({}, actualConstants),
        reducer: actualReducer,
        saga: actualSagas,
        remotes: Object.assign({}, actualRemotes)
    };
}
