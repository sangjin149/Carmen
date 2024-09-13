import styled, { keyframes } from 'styled-components';

export default function ScrollIndicator({ direction = 'down', ...props }) {
  return (
    <ArrowScroll {...props}>
      <Arrow $direction={direction} />
      <Arrow $direction={direction} />
      <Arrow $direction={direction} />
    </ArrowScroll>
  );
}

const ArrowScroll = styled.div`
  position: relative;
  height: 2rem;
`;

function generateKeyframes(direction, nth) {
  if (nth === 0) return '';

  let finalPosition = '50%';
  if (nth === 3 && direction === 'up') finalPosition = '0%';
  if (nth === 3 && direction === 'down') finalPosition = '100%';

  const keyframe = keyframes`
          100% {
              opacity: 0;
              top: ${finalPosition};
          }
      `;

  return keyframe;
}

const Arrow = styled.div`
  border: 1px solid black;
  border-width: ${(props) => (props.$direction === 'up' ? '3px 0 0 3px' : '0 3px 3px 0')};
  display: inline-block;
  padding: 8px;
  position: absolute;
  top: ${(props) => (props.$direction === 'up' ? '100%' : '0%')};
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  &:nth-child(2) {
    animation: ${(props) => generateKeyframes(props.$direction, 2)} 1.5s ease-in-out infinite;
  }
  &:nth-child(3) {
    animation: ${(props) => generateKeyframes(props.$direction, 3)} 1.5s ease-in-out infinite;
  }
`;
