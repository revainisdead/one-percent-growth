import React from "react";

import _ from "underscore";

export const noop = () => {};
export const notEmpty = (d) => !_.isEmpty(d);
export const useMountEffect = (func) => React.useEffect(func, []);
