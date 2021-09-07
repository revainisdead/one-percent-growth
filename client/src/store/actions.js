export const SET_KEY = "SET_KEY";
// Action creator
export const setKey = ({ key, value }) => {
    // Returns action
    return {
        type: SET_KEY,
        key: key,
        value: value,
    };
};

export const TOGGLE_KEY = "TOGGLE_KEY";
// Action creator
export const toggleKey = ({ key }) => {
    // Returns action
    return {
        type: TOGGLE_KEY,
        key: key,
    };
};
