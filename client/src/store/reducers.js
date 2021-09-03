import {
    SET_KEY,
    TOGGLE_KEY,
} from "./actions.js";

const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_KEY:
            return {
                ...state,
                [action.key]: action.value,
            };
        case TOGGLE_KEY:
            return {
                ...state,
                [action.key]: !state[action.key],
            };
        //case APPEND_ARRAY:
        //    return {
        //        ...state,
        //        [action.key]: state[action.key].concat(action.value)
        default:
            return state;
    }
}

export default rootReducer;
