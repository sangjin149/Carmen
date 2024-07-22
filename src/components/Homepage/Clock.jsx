import { styled } from "styled-components";
import { useState, useEffect } from "react";

import { updateClock } from "@utils/time";

export default function Clock() {
    const [time, setTime] = useState({
        month: "1",
        date: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        day: "None",
    });

    function updateTime() {
        setTime(updateClock());
    }

    const timeNotUpdated = time.date === "00";

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    if (timeNotUpdated) return <Container>Loading</Container>;

    return (
        <Container>
            <Date>
                {time.month}.{time.date} {time.day}
            </Date>
            <Time>
                {time.hours}:{time.minutes}
            </Time>
        </Container>
    );
}

const Container = styled.div`
    width: 26rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Date = styled.div`
    text-align: end;
    font-size: 1.375rem;
`;

const Time = styled.div`
    height: 4rem;
    line-height: 4.5rem;
    font-size: 5rem;
`;
