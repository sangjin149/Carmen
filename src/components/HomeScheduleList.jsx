import { styled } from "styled-components";

import ScheduleBox from "@components/ScheduleBox";

export default function HomeScheduleList() {
    return (
        <Container>
            <ScheduleBox star active />
            <ScheduleBox />
            <ScheduleBox />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
`;
