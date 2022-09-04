import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react";
import App from "./components/main/App";
// import store from './redux/store/index'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <Provider store={store}>
        <App /> 
    // {/* </Provider> */}
);
