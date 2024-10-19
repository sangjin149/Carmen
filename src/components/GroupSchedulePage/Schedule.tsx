import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { Button, Checkbox } from '@ui';
import { useState } from 'react';
interface Props {
  title: string;
  description: string;
  time: Dayjs;
  color: string;
  alarm?: string;
}

const DUMMY_SCHEDULE = {
  title: '더미 스케쥴',
  description: '아무 내용',
  time: dayjs(),
  color: '#e4617a',
};

export default function Schedule({ title, description, time, color, alarm }: Props) {
  const [scheduleInfo, setScheduleInfo] = useState(DUMMY_SCHEDULE);

  return (
    <Container>
      <Title>
        <Checkbox checkedColor={scheduleInfo.color} />
        {scheduleInfo.title}
      </Title>
      <Detail>{scheduleInfo.description}</Detail>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const Detail = styled.div``;

const Content = styled.div``;

const EditButton = styled(Button)``;
