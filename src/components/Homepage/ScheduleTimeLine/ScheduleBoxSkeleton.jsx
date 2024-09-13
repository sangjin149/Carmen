import { styled } from 'styled-components';
import { Skeleton } from '@ui';

export default function ScheduleBoxSkeleton() {
  return (
    <Container>
      <Details>
        <TitleSkeleton />
        <DetailSkeleton />
        <DetailSkeleton />
      </Details>
      <ActionBox />
    </Container>
  );
}

const Container = styled.div`
  width: 26rem;
  position: relative;
  z-index: 2;
  display: flex;
  border: 1px solid #b1b1b1;
  border-radius: 8px;
  background-color: white;

  &::before {
    content: '';
    width: 4px;
    height: 100%;

    position: absolute;
    left: 350px;
    background-color: #7fa9fd;
  }
`;

const Details = styled.div`
  width: 310px;
  padding: 0.5rem 0;
  padding-left: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TitleSkeleton = styled(Skeleton)`
  width: 12rem;
  height: 0.875rem;
`;

const DetailSkeleton = styled(Skeleton)`
  width: 16rem;
  height: 0.875rem;
`;

const ActionBox = styled.div`
  width: 4rem;
  height: 68px;
`;
