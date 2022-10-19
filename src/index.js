import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import store from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles>
        <Provider store={store}>
          <App />
        </Provider>
      </GlobalStyles>
    </BrowserRouter>
  // </React.StrictMode>
);
