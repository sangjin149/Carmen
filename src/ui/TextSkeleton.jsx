import { styled } from 'styled-components';
import { Skeleton } from '@ui';

export default function TextSkeleton({ lineSize = 16, lines = 1, lineProps, ...props }) {
  const arr = [];
  for (let i = 0; i < lines; i++) arr.push(`skeleton line ${i}`);

  return (
    <Container {...props}>
      {arr.map((val) => (
        <LineSkeleton key={val} $linesize={lineSize} {...lineProps} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LineSkeleton = styled(Skeleton)`
  width: 100%;
  height: ${(props) => props.$linesize}px;
`;
