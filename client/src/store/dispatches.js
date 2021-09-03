import { setKey, toggleKey } from "./actions.js";
import * as KEYS from "./statekeys.js";

import Papa from 'papaparse';

export const setSavingsFile = (data) => {
    return (dispatch, getState) => {
        dispatch(setKey({key: KEYS.SAVINGS_FILE, value: data}))
    };
};

export const parseSavingsFile = (file) => {
    return (dispatch, getState) => {
        //const state = getState()

        const onComplete = (results) => {
            dispatch(setKey({key: KEYS.SAVINGS_FILE, value: results.data}));
        };

        if (file) {
            console.log('about to parse', file);
            Papa.parse(file, {
                header: true,
                complete: onComplete,
            });
        }
    };
};
