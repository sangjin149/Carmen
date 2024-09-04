import { styled } from 'styled-components';

import Progressbar from '@ui/Progressbar';
import { ScheduleBox } from '@components/Homepage';

export default function HomeScheduleList({ scheduleList }) {
  return (
    <Container>
      {scheduleList.map((schedule) => (
        <ScheduleBox schedule={schedule} key={schedule.id} />
      ))}
      <ProgressbarWrapper>
        <Progress progress={80} direction="column" barColor="#f9f7c9" progressColor="#AAD9BB" />
      </ProgressbarWrapper>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProgressbarWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 1rem;
  z-index: 1;
`;

const Progress = styled(Progressbar)`
  width: 0.5rem;
  height: 100%;
`;
