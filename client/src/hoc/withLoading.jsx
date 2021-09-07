import React, { useEffect } from "react";

// For examples, see:
// https://medium.com/javascript-scene/do-react-hooks-replace-higher-order-components-hocs-7ae4a08b7b58

// Example of Higher Order Component used for including shared hook code
// TODO: Doesn't this defeat the point of using hooks,
//       which are supposed to make code reusable?
const withLogger = (Component) => {
    return (props) => {
        useEffect(() => {
            fetch(`/logger?location=${window.location}`);
        }, []);

        return <Component {...props} />;
    };
};

const Loading = (props) => {
    const msg = props.msg ? props.msg : "Loading . . .";

    return <div class="loading spinner">{msg}</div>;
};

const withLoading = (Component) => {
    return (props) => {
        return (
            <Loading msg="Custom Loading Message . . .">
                <Component {...props} />
            </Loading>
        );
    };
};
