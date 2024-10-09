import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { Checkbox } from '@ui';
interface Props {
  title: string;
  description: string;
  time: Dayjs;
  color: string;
  alarm?: string;
}

export default function Schedule({ title, description, time, color, alarm }: Props) {
  return (
    <Container>
      <ScheduleTitle>
        <Checkbox checkedColor="#e4617a" />
        스케쥴1
      </ScheduleTitle>
      <ScheduleDetail></ScheduleDetail>
      <ScheduleContent></ScheduleContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ScheduleTitle = styled.div`
  font-size: 1.25rem;
`;

const ScheduleDetail = styled.div``;

const ScheduleContent = styled.div``;
