import { styled } from 'styled-components';
import { useState, Suspense } from 'react';

import Progressbar from '@ui/Progressbar';
import ScheduleBoxList from './ScheduleBoxList';
import ScheduleBoxSkeleton from './ScheduleBoxSkeleton';
import Placeholder from './TimeLinePlaceholder';
import ScrollView from './ScrollView';

const ScheduleListSkeleton = (
  <>
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
  </>
);

export default function ScheduleTimeLine({ scheduleList, ...props }) {
  const [listIsEmpty, setListIsEmpty] = useState(false);
  function handleListFetch(list) {
    if (list.length === 0) setListIsEmpty(true);
  }

  if (listIsEmpty) return <Placeholder />;

  return (
    <Scroller {...props}>
      <Container>
        <Suspense fallback={ScheduleListSkeleton}>
          <ScheduleBoxList scheduleListPromise={scheduleList} onGetList={handleListFetch} />
        </Suspense>
        <ProgressbarWrapper>
          <Progress progress={80} direction="column" barColor="#f9f7c9" progressColor="#AAD9BB" />
        </ProgressbarWrapper>
      </Container>
    </Scroller>
  );
}

const Scroller = styled(ScrollView)`
  padding: 2rem 0px;
  width: 28rem;
  height: 60rem;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #cfcfcf;
    border-radius: 4px;
  }
`;

const Container = styled.section`
  position: relative;
  padding: 2.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProgressbarWrapper = styled.div`
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
