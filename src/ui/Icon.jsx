import { Svg } from '@ui';
import { styled } from 'styled-components';

export default function Icon({ src, containerWidth = 16, containerHeight = 16, size, ...props }) {
  const width = size ?? containerWidth;
  const height = size ?? containerHeight;

  return (
    <Container width={width} height={height}>
      <Svg src={src} {...props} />
    </Container>
  );
}

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
