import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

import { updateClock } from '@utils/time';

export default function Clock() {
  const [time, setTime] = useState({
    month: '1',
    date: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    day: 'None',
  });
 
  function updateTime() {
    setTime(updateClock());
  }

  const timeNotUpdated = time.date === '00';

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container>
      <Date>{timeNotUpdated ? '' : `${time.month}.${time.date} ${time.day}`}</Date>
      <Time>
        {timeNotUpdated ? (
          <LoadingIndicator>Loading...</LoadingIndicator>
        ) : (
          `${time.hours}:${time.minutes}`
        )}
      </Time>
    </Container>
  );
}

const Container = styled.div`
  height: 6rem;
  width: 26rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
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

const LoadingIndicator = styled.div`
  font-size: 5rem;
`;
