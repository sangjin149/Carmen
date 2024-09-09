import { styled } from 'styled-components';
import { getTodaysSchedules } from 'src/apis/firebaseAPI';

import { Clock, ScheduleTimeLine, HomeTodoList } from '@components/Homepage';
import { prepareSuspense } from 'src/apis/prepareSuspense';
import generateDummyTodo from '@utils/dummyToDo';

const DUMMY_TODO_LIST = generateDummyTodo(4);

export default function Homepage() {
  const wrappedPromise = prepareSuspense(getTodaysSchedules());

  return (
    <Container>
      <MainColumn>
        <Clock />
        <TimeLine scheduleList={wrappedPromise} />
      </MainColumn>
      <SubColumn>
        <HomeTodoList todoGroupList={DUMMY_TODO_LIST} />
      </SubColumn>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 3rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const MainColumn = styled.div`
  width: 27rem;
`;

const SubColumn = styled.div`
  margin-top: 9rem;
`;

const TimeLine = styled(ScheduleTimeLine)`
  margin-top: 3rem;
`;
