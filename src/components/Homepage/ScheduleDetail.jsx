import { styled } from 'styled-components';
import { ScheduleTime, ScheduleLocation, ScheduleAlarm } from '@icons';

import { Icon } from '@ui';

function getProcessedTime(date, displayAs24 = true) {
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let dateDisplay = `${month + 1}월 ${day}일`;

  const today = new window.Date();
  const tomorrow = new window.Date();
  tomorrow.setDate(today.getDate() + 1);

  if (tomorrow.toDateString() === date.toDateString()) dateDisplay = '내일';
  if (today.toDateString() === date.toDateString()) dateDisplay = '오늘';

  let processedHour = hour;
  let processedMinute = minute;
  let ojunOhoo = '';

  if (!displayAs24) {
    ojunOhoo = hour > 11 ? '오전 ' : '오후 ';
    processedHour = hour > 12 ? hour - 12 : hour;
  }

  processedHour = processedHour.toString().padStart(2, '0');
  processedMinute = processedMinute.toString().padStart(2, '0');

  const timeDisplay = `${ojunOhoo} ${processedHour}:${processedMinute}`;

  return `${dateDisplay} ${timeDisplay}`;
}

export default function ScheduleDetail({ schedule, hideDescription }) {
  const { date } = schedule;

  const processedTime = getProcessedTime(date);

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
