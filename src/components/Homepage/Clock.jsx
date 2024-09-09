import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

import { updateClock } from '@utils/time';

export default function Clock() {
  const [time, setTime] = useState(updateClock());

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
      <Date>{`${time.month}.${time.date} ${time.day}`}</Date>
      <Time>{`${time.hours}:${time.minutes}`}</Time>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  height: 2rem;
  text-align: end;
  font-size: 1.25rem;
`;

const Time = styled.div`
  height: 4rem;
  line-height: 4.5rem;
  font-size: 5rem;
`;
