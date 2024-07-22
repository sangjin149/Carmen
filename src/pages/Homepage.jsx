import { styled } from "styled-components";

import { Sidebar } from "@components/Sidebar";
import { Clock, HomeScheduleList, HomeTodoList } from "@components/Homepage";

export default function Homepage() {
    //router 적용 후 레이아웃 수정 예정
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
