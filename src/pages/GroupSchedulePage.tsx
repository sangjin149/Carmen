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
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.h1`
  height: 64px;
  font-size: 1.75rem;
`;

const NewGroupSchedule = styled(Button)`
  margin: 0.25rem;
  width: 30rem;
  height: 1.75rem;
  padding: 0.25rem 0.75rem;

  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #e4617a;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
  box-shadow: 0px 0px 5px 1px rgba(219, 219, 219, 1);
`;

const DateGroupedSchedules = styled.div`
  margin: 0.5rem 0;
`;

const DateGroupTitle = styled.div`
  position: relative;
  padding-left: 0.5rem;
  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 2px;
    height: 100%;
    color: #e4617a;
  }
`;

const Schedule = styled.div`
  width: 100%;
  overflow: hidden;
`;
