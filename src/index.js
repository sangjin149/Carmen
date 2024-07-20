import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "@styles/fontStyles";
import GlobalStyle from "@styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FontStyles />
        <GlobalStyle />
        <App />
    </React.StrictMode>
);

reportWebVitals();
