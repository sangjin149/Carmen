import { styled } from 'styled-components';
import { useCurrentTime } from '@hooks';

function getTexts(dayjsObj) {
  const [month, date, dayInNum, hours, minutes] = dayjsObj.format('MM DD d HH mm').split(' ');
  let day = '일요일';

  switch (Number(dayInNum)) {
    case 0:
      day = '일요일';
      break;
    case 1:
      day = '월요일';
      break;
    case 2:
      day = '화요일';
      break;
    case 3:
      day = '수요일';
      break;
    case 4:
      day = '목요일';
      break;
    case 5:
      day = '금요일';
      break;
    case 6:
      day = '토요일';
      break;
    default:
      day = '날짜 계산 오류';
  }

  const dateText = `${month}.${date} ${day}`;
  const timeText = `${hours}:${minutes}`;

  return [dateText, timeText];
}

export default function Clock() {
  const now = useCurrentTime();
  const [dateText, timeText] = getTexts(now);
  return (
    <Container>
      <Date>{dateText}</Date>
      <Time>{timeText}</Time>
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
  text-align: end;
  font-size: 5rem;
`;
