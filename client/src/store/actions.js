export const SET_KEY = "SET_KEY";
export const setKey = (key, value) => {
    return {
        type: SET_KEY,
        key: key,
        value: value,
    };
};

export const TOGGLE_KEY = "TOGGLE_KEY";
export const toggleKey = (key) => {
    return {
        type: TOGGLE_KEY,
        key: key,
    };
};
