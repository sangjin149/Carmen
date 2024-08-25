import { styled } from 'styled-components';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import dayjs from 'dayjs';

export default function ScheduleTimePicker({ value, onChange }) {
  if (!(value instanceof dayjs))
    throw new Error('form value "time" is not a dayjs instance');

  return (
    <Container>
      <DatePicker value={value} onChange={onChange} />
      <TimePicker value={value} onChange={onChange} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;
