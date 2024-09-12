import { styled } from 'styled-components';
import { useRef, useState, useCallback, useEffect } from 'react';

export default function ScrollView({ children, ...props }) {
  const [isScrolling, setIsScrolling] = useState(false);
  const prevTimeoutRef = useRef();

  function handleScroll() {
    if (isScrolling) clearTimeout(prevTimeoutRef.current);
    setIsScrolling(true);
    prevTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
      console.log('scroll stoped!');
    }, 1000);
  }

  return (
    <Container onScroll={handleScroll} $isScrolling={isScrolling} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.section`
  overflow-x: hidden;
  overflow-y: overlay;
  &::-webkit-scrollbar-thumb {
    display: ${(props) => (props.$isScrolling ? 'block' : 'none')};
  }
`;
