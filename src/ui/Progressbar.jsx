import { styled } from 'styled-components';

export default function Progressbar({
  progress,
  direction,
  barColor,
  progressColor,
  ...props
}) {
  return (
    <Container $direction={direction} {...props}>
      <EndPoint>
        <EndPointIndicator $backgroundColor={progressColor} />
      </EndPoint>
      <ProgressIndicator
        $progress={progress}
        $direction={direction}
        $backgroundColor={progressColor}
      />
      <ProgressIndicator
        $progress={100 - progress}
        $direction={direction}
        $backgroundColor={barColor}
      />
      <EndPoint>
        <EndPointIndicator $backgroundColor={barColor} />
      </EndPoint>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: center;
  background-color: black;
`;

const EndPoint = styled.div`
  position: relative;
  background-color: aqua;
`;

const ProgressIndicator = styled.div`
  width: ${({ $progress, $direction }) =>
    $direction === 'row' ? `${$progress}%` : '100%'};
  height: ${({ $progress, $direction }) =>
    $direction === 'column' ? `${$progress}%` : '100%'};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

const EndPointIndicator = styled.div`
  width: 18px;
  height: 18px;

  position: absolute;
  top: -9px;
  left: -9px;

  border-radius: 50%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
