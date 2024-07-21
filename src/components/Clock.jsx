import { styled } from "styled-components";
import { useState, useEffect } from "react";

function updateClock() {
    let now = new window.Date();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return { month, day, hours, minutes, seconds };
}

export default function Clock() {
    const [time, setTime] = useState({
        month: "1",
        day: "01",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    function updateTime() {
        setTime(updateClock());
    }

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container>
            <Date>
                {time.month}.{time.day}
            </Date>
            <Time>
                {time.hours}:{time.minutes}
            </Time>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Date = styled.div`
    text-align: end;
`;

const Time = styled.div`
    height: 4rem;
    line-height: 4.5rem;
    font-size: 5rem;
`;
