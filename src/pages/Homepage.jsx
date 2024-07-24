import { styled } from "styled-components";

import { Sidebar } from "@components/Sidebar";
import { Clock, HomeScheduleList, HomeTodoList } from "@components/Homepage";
import generateDummyTodo from "@utils/dummyToDo";
import generateDummySchedule from "@utils/dummySchedule";

const DUMMY_SCHEDULE_LIST = generateDummySchedule(16);
const DUMMY_TODO_LIST = generateDummyTodo(4);

export default function Homepage() {
    return (
        <Container>
            <Clock />
            <Content>
                <HomeScheduleList scheduleList={DUMMY_SCHEDULE_LIST} />
                <HomeTodoList todoGroupList={DUMMY_TODO_LIST} />
            </Content>
        </Container>
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
