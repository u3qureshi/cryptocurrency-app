import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import "antd/dist/antd.css";

import store from "./app/store";

/** In order to use links and other things, we must
 * wrap our app with the 'Router' */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

/** We place the App inside of the Provider.
 * We do this because now that the entire App is inside of the Provider,
 * then every single component inside the App is going to have access to the store variable,
 *
 */
