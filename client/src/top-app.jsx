import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import { compose } from "redux";

import { BrowserRouter } from "react-router-dom";

import App from "./app.jsx";
import { store } from "./store/store.js";

// Store is imported and stored in this closure with the WrappedComponent
const withRedux = (Component) => {
    return (props) => {
        return (
            <ReduxProvider store={store}>
                <Component {...props} />
            </ReduxProvider>
        );
    };
};

const withRouter = (Component) => {
    return (props) => {
        return (
            <BrowserRouter>
                <Component {...props} />
            </BrowserRouter>
        );
    };
};

const TopApp = () => {
    return <App />;
};

//<header className="App-header">
//</header>

export default compose(withRedux, withRouter)(TopApp);
