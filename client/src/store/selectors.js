import * as KEYS from "./statekeys.js";

import _ from "underscore";

export const getSavingsFile = (state) => state[KEYS.SAVINGS_FILE];

console.log("test", _.isEmpty({}));
