import dayjs, { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { Button, Checkbox, Icon } from '@ui';
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
  alarm: '5 minute',
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
        {scheduleInfo.time && (
          <ContentItem>
            <ContentIcon />
            <Contenttext></Contenttext>
          </ContentItem>
        )}
      </Content>
      <Description>{scheduleInfo.description}</Description>
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

const ContentItem = styled.div`
  display: flex;
  align-items: center;
`;

const ContentIcon = styled(Icon)`
  fill: #adadad;
  width: 14px;
  height: 14px;
`;

const Contenttext = styled.div``;

const Description = styled.div`
  font-size: 0.875rem;
`;

const EditButton = styled(Button)``;
