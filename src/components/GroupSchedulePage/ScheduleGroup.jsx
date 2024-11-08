import { Button } from '@ui';
import { styled } from 'styled-components';

export default function ScheduleGroup({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

const Container = styled.div``;

const FoldButton = styled(Button)``;

const Title = styled.div``;
