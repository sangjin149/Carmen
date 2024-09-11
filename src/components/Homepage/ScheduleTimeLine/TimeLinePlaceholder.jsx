import { styled } from 'styled-components';
import PeaceEmoji from '@assets/PeaceEmoji.png';

export default function TimeLinePlaceholder() {
  return (
    <Container>
      <Emoji src={PeaceEmoji} />
      <Message>오늘은 일정이 없네요!</Message>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.img`
  width: 6rem;
  height: 6rem;
`;

const Message = styled.div`
  padding: 0.75rem;
`;
