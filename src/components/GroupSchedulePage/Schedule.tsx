import dayjs, { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { Button, Checkbox } from '@ui';
import { useState } from 'react';
interface Props {
  title: string;
  description: string;
  time: Dayjs;
  color: string;
  alarm?: string;
}

const DUMMY_SCHEDULE = {
  title: '더미 스케쥴',
  description: '아무 내용',
  time: dayjs(),
  color: '#e4617a',
};

export default function Schedule({ title, description, time, color, alarm }: Props) {
  // TODO: 편집 버튼 추가
  // TODO: 접기 펼치기 기능 추가
  // TODO: 즐겨찾기 기능
  const [scheduleInfo, setScheduleInfo] = useState(DUMMY_SCHEDULE);

  function handleEditClick() {}

  return (
    <Container>
      <Title>
        <Checkbox checkedColor={scheduleInfo.color} />
        {scheduleInfo.title}
        <EditButton onClick={handleEditClick}>{'편집'}</EditButton>
      </Title>

      <Content>
        <Detail>{scheduleInfo.description}</Detail>
      </Content>
    </Container>
  );
}

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  font-size: 0.875rem;
  margin-left: 1.25rem;
`;

const Detail = styled.div`
  font-size: 0.875rem;
`;

const EditButton = styled(Button)``;
