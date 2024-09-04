import { styled } from 'styled-components';
import { Suspense } from 'react';
import { getTodaysSchedules } from 'src/apis/firebaseAPI';

import { Clock, ScheduleTimeLine, HomeTodoList } from '@components/Homepage';
import { prepareSuspense } from 'src/apis/prepareSuspense';
import generateDummyTodo from '@utils/dummyToDo';

const DUMMY_TODO_LIST = generateDummyTodo(4);

export default function Homepage() {
  const wrappedPromise = prepareSuspense(getTodaysSchedules());

  return (
    <Container>
      <Clock />
      <Content>
        <Suspense fallback={<h1>loading</h1>}>
          <ScheduleTimeLine scheduleList={wrappedPromise} />
        </Suspense>
        <HomeTodoList todoGroupList={DUMMY_TODO_LIST} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 3rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Content = styled.div`
  padding-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
