import { Button } from '@ui';
import { styled } from 'styled-components';

export default function GroupSchedulePage() {
  // TODO: 내용 로딩 전 (쉿..로딩 중!) 화면 띄우기
  // TODO: 컴포넌트 개발
  // [ ] : 스케쥴 컴포넌트
  // [ ] : 스케쥴 그룹 컴포넌트
  // [ ] : 새 작업 버튼
  // [ ] : 사이드 바 그룹 컴포넌트

  return (
    <Container>
      <GroupTitle>분류1</GroupTitle>
      <NewGroupSchedule>+ 새 작업</NewGroupSchedule>
      <DateGroupedSchedules>
        <DateGroupTitle>그룹1</DateGroupTitle>
        <Schedule>스케쥴1</Schedule>
        <Schedule>스케쥴2</Schedule>
      </DateGroupedSchedules>
      <DateGroupedSchedules>
        <DateGroupTitle>그룹2</DateGroupTitle>
        <Schedule>스케쥴3</Schedule>
        <Schedule>스케쥴4</Schedule>
      </DateGroupedSchedules>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.h1``;

const NewGroupSchedule = styled(Button)``;

const DateGroupedSchedules = styled.div``;

const DateGroupTitle = styled.div``;

const Schedule = styled.div``;
