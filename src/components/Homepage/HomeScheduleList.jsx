import { styled } from "styled-components";

import { ScheduleBox } from "@components/Homepage";
import generateDummyData from "@utils/dummySchedule";

function sortScheduleByDate(prevSchedule, nextSchedule) {
    const prevTime = prevSchedule.time.replace(" ", "").replace(".", "").replace(":", "");
    const nextTime = nextSchedule.time.replace(" ", "").replace(".", "").replace(":", "");

    return prevTime - nextTime;
}

const DUMMY_DATA = generateDummyData(16).sort(sortScheduleByDate);

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
