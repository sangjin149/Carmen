import React, { useState } from "react";
import FontStyles from "@styles/fontStyles";
import GlobalStyle from "@styles/GlobalStyle";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import koKR from "antd/locale/ko_KR";

import NewScheduleForm from "@components/NewScheduleForm";
import MainLayout from "@pages/MainLayout";
import { clickAwayContext } from "@contexts";
import { styled } from "styled-components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <div>잘못된 경로인 듯?</div>,
        children: [
            {
                index: true,
                element: <NewScheduleForm />,
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

export default function App(params) {
    const [clickedElement, setClickedElement] = useState(null);

    function handleAppClicked(e) {
        setClickedElement(e.target);
    }

    return (
        <React.StrictMode>
            <FontStyles />
            <GlobalStyle />
            <ConfigProvider
                locale={koKR}
                theme={{
                    token: {
                        fontFamily: "NanumGothic",
                        colorPrimary: "#aad9bb",
                    },
                }}
            >
                <clickAwayContext.Provider value={{ clickedElement }}>
                    <ClickAwayListener onClick={handleAppClicked}>
                        <RouterProvider router={router} />
                    </ClickAwayListener>
                </clickAwayContext.Provider>
            </ConfigProvider>
        </React.StrictMode>
    );
}

const ClickAwayListener = styled.div``;
