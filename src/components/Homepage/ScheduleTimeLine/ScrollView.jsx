import { styled } from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useTrailingThrottle } from '@hooks';
import ScrollIndicator from './ScrollIndicator';

export default function ScrollView({ children, ...props }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [onTop, setOnTop] = useState(true);
  const [onBottom, setOnBottom] = useState(true);
  const prevTimeoutRef = useRef();
  const containerRef = useRef();

  function checkScrollingState() {
    if (isScrolling) clearTimeout(prevTimeoutRef.current);
    setIsScrolling(true);
    prevTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  }

  function checkScrollAtTop() {
    const currrentPosition = containerRef.current.scrollTop;
    const trueZone = containerRef.current.clientHeight / 10;
    setOnTop(currrentPosition <= trueZone);
  }

  function checkScrollAtBottom() {
    const container = containerRef.current;
    const currentPosition = container.scrollTop;
    const maxPosition = container.scrollHeight - container.clientHeight;
    const trueZone = containerRef.current.clientHeight / 10;
    setOnBottom(currentPosition > maxPosition - trueZone);
  }

  const handleScroll = useTrailingThrottle(() => {
    checkScrollAtTop();
    checkScrollAtBottom();
    checkScrollingState();
  }, 100);

  useEffect(() => {
    checkScrollAtTop();
    checkScrollAtBottom();
  }, []);

  return (
    <IndicatorWrapper>
      {!onTop && (
        <UpIndicatorSpace>
          <ScrollIndicator direction="up" />
        </UpIndicatorSpace>
      )}
      <Container ref={containerRef} onScroll={handleScroll} $isScrolling={isScrolling} {...props}>
        {children}
      </Container>
      {!onBottom && (
        <DownIndicatorSpace>
          <ScrollIndicator direction="down" />
        </DownIndicatorSpace>
      )}
    </IndicatorWrapper>
  );
}

const Container = styled.section`
  overflow-x: hidden;
  overflow-y: overlay;
  &::-webkit-scrollbar-thumb {
    display: ${(props) => (props.$isScrolling ? 'block' : 'none')};
  }
`;

const IndicatorWrapper = styled.div`
  position: relative;
`;

const IndicatorSpace = styled.div`
  width: 100%;
  height: 3rem;
  position: absolute;
  z-index: 8;
  background-color: rgb(210, 210, 210, 0.1);
`;

const UpIndicatorSpace = styled(IndicatorSpace)`
  top: 0;
`;

const DownIndicatorSpace = styled(IndicatorSpace)`
  bottom: 0;
`;
