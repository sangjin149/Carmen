import { styled } from 'styled-components';
import dayjs from 'dayjs';
import { ScheduleTime, ScheduleLocation, ScheduleAlarm } from '@icons';

import { Icon } from '@ui';

function processDateText(date) {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');

  if (today.diff(date, 'day')) return '오늘';
  if (tomorrow.diff(date, 'day')) return '내일';
  return `${date.month()}월 ${date.date()}일`;
}

function processHourText(date, displayAs24) {
  const hour = date.hour();
  const minute = date.minute();

  let ampm = '';
  let processedHour = hour;

  if (!displayAs24) {
    ampm = hour > 11 ? '오전 ' : '오후 ';
    processedHour = hour > 12 ? hour - 12 : hour;
  }

  processedHour = processedHour.toString().padStart(2, '0');
  const processedMinute = minute.toString().padStart(2, '0');
  const result = `${ampm} ${processedHour}:${processedMinute}`;

  return result;
}

function dateToText(date, displayAs24 = true) {
  const dateDisplay = processDateText(date);
  const timeDisplay = processHourText(date, displayAs24);

  return `${dateDisplay} ${timeDisplay}`;
}

export default function ScheduleDetail({ schedule, hideDescription }) {
  const { time } = schedule;

  const processedTime = dateToText(time);

  return (
    <Container>
      <Title>{schedule.title}</Title>
      <Details>
        <Icon src={ScheduleTime} alt="time icon" width={18} />
        {processedTime}
      </Details>
      <Details>
        <Icon src={ScheduleLocation} alt="location icon" width={18} />
        {schedule.location}
      </Details>
      <Details>
        <Icon src={ScheduleAlarm} alt="alarm icon" width={18} />
        추후 구현 예정
      </Details>
      {!hideDescription && <Description>{schedule.description}</Description>}
    </Container>
  );
}

const Container = styled.article`
  width: 310px;
  padding: 0.5rem 0;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  width: 310px;
  height: 1.5rem;
  margin: 0px;
  margin-bottom: 0.5rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 0.875rem;
  line-height: 1.5rem;
  font-family: 'NanumSquareB';
`;

const Details = styled.div`
  height: 1.5rem;
  margin-bottom: 0.25rem;
  display: flex;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

const Description = styled.div`
  margin-top: 0.8rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  font-family: 'NanumGothicLight';
  font-size: 0.8rem;
  line-break: anywhere;
  word-spacing: 2px;
  line-height: 1.4;
`;
