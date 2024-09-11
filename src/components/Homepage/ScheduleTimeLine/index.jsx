import { styled } from 'styled-components';
import { useState, Suspense } from 'react';

import Progressbar from '@ui/Progressbar';
import ScheduleBoxList from './ScheduleBoxList';
import ScheduleBoxSkeleton from './ScheduleBoxSkeleton';
import Placeholder from './TimeLinePlaceholder';

const ScheduleListSkeleton = (
  <>
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
    <ScheduleBoxSkeleton />
  </>
);

export default function ScheduleTimeLine({ scheduleList, ...props }) {
  //TODO: Suspense는 별로 안 좋은 듯, Suspense 지우고 Skeleton 컴포넌트 새로 만들기
  //TODO: ClickawayListener 응용해서 만들면 될 듯
  const [listIsEmpty, setListIsEmpty] = useState(false);
  function handleListFetch(list) {
    if (list.length === 0) setListIsEmpty(true);
  }

  if (listIsEmpty) return <Placeholder />;

  return (
    <Container {...props}>
      <Suspense fallback={ScheduleListSkeleton}>
        <ScheduleBoxList scheduleListPromise={scheduleList} onGetList={handleListFetch} />
      </Suspense>
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
