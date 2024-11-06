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

const Title = styled.div``;
