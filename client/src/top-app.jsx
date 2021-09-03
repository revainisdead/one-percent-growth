import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import App from "./app.jsx";
import { store } from "./store/store.js";


const TopApp = () => {
    return (
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    );
}

//<header className="App-header">
//</header>

export default TopApp;
