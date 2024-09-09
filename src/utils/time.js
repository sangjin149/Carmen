import dayjs from 'dayjs';

export const updateClock = () => {
  const now = dayjs();
  const [month, date, dayInNum, hours, minutes, seconds] = now
    .format('MM DD d HH mm ss')
    .split(' ');
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

  return { month, date, day, hours, minutes, seconds };
};
