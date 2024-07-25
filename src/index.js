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
                index: true,
                element: <Homepage />,
            },
            {
                path: "/addschedule",
                element: <div>새 작업 추가</div>,
            },
            {
                path: "/today",
                element: <div>오늘의 일정</div>,
            },
            {
                path: "/calendar",
                element: <div>달력</div>,
            },
            {
                path: "/important",
                element: <div>중요 일정</div>,
            },
            {
                path: "/groups/:groupid",
                element: <div>그룹 일정</div>,
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login Screen</div>,
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
