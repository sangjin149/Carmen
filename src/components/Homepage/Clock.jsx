import { styled } from "styled-components";
import { useState, useEffect } from "react";

import { updateClock } from "@utils/time";

export default function Clock() {
    const [time, setTime] = useState({
        month: "1",
        day: "01",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const [hidden, setHidden] = useState(true);

    function updateTime() {
        setTime(updateClock());
    }

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        setHidden(false);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container>
            {setHidden ? (
                "HIDDEN"
            ) : (
                <>
                    <Date>
                        {time.month}.{time.day}
                    </Date>
                    <Time>
                        {time.hours}:{time.minutes}
                    </Time>
                </>
            )}
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
