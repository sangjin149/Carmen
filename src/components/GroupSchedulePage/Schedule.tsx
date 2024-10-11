import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { Checkbox } from '@ui';
interface Props {
  title: string;
  description: string;
  time: Dayjs;
  color: string;
  alarm?: string;
}

export default function Schedule({ title, description, time, color, alarm }: Props) {
  return (
    <Container>
      <Title>
        <Checkbox checkedColor="#e4617a" />
        스케쥴1
      </Title>
      <Detail></Detail>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const Detail = styled.div``;

const Content = styled.div``;
