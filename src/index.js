import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import FontStyles from "@styles/fontStyles";
import GlobalStyle from "@styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@pages/Homepage";
import MainLayout from "@pages/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FontStyles />
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();
