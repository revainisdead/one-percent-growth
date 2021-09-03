// Separate by action type, action, and action creator

export const SET_KEY = "SET_KEY";
// Action
const setKeyAction = {
    type: SET_KEY,
    key: key,
    value: value,
};
// Action creator
export const setKey = ({key, value}) => {
    return setKeyAction;
};

export const TOGGLE_KEY = "TOGGLE_KEY";
// Action
const toggleKeyAction = {
    type: TOGGLE_KEY,
    key: key,
};
// Action creator
export const toggleKey = ({key}) => {
    return toggleKeyAction;
};


//export const SET_KEY = "SET_KEY";
//export const setKey = ({key, value}) => {
//    return {
//        type: SET_KEY,
//        key: key,
//        value: value,
//    };
//};
//
//export const TOGGLE_KEY = "TOGGLE_KEY";
//export const toggleKey = ({key}) => {
//    return {
//        type: TOGGLE_KEY,
//        key: key,
//    };
//};
