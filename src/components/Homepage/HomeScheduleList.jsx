import { styled } from "styled-components";

import { ScheduleBox } from "@components/Homepage";
import generateDummyData from "src/utils/dummySchedule";

const DUMMY_DATA = generateDummyData(8);

export default function HomeScheduleList() {
    return (
        <Container>
            {DUMMY_DATA.map((schedule) => (
                <ScheduleBox schedule={schedule} key={schedule.id} />
            ))}
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;
