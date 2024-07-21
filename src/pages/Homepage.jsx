import { styled } from "styled-components";

import Sidebar from "@components/Sidebar.jsx";
import Clock from "@components/Clock";
import HomeScheduleList from "@components/HomeScheduleList";
import HomeTodoList from "@components/HomeTodoList";

export default function Homepage() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <Container>
                <Clock />
                <Content>
                    <HomeScheduleList />
                    <HomeTodoList />
                </Content>
            </Container>
        </div>
    );
}

const Container = styled.div`
    padding-top: 3rem;
    padding-left: 1rem;

    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Content = styled.div`
    padding-top: 64px;
    //좀 넓어보여서 figma 명세보다 줄여놓음
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
