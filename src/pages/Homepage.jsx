import { styled } from 'styled-components';
import { Clock, HomeScheduleList, HomeTodoList } from '@components/Homepage';
import generateDummyTodo from '@utils/dummyToDo';
import generateDummySchedule from '@utils/dummySchedule';
import { useState, useEffect } from 'react';

import { getTodaysSchedules } from 'src/apis/firebaseAPI';

const DUMMY_SCHEDULE_LIST = generateDummySchedule(16);
const DUMMY_TODO_LIST = generateDummyTodo(4);

export default function Homepage() {
  const [todaysSchedules, setTodaysSchedule] = useState([]);

  useEffect(() => {
    async function fetchTodaysSchedule() {
      const scheduleList = await getTodaysSchedules();
      setTodaysSchedule(scheduleList);
    }
    fetchTodaysSchedule();
  }, []);

  return (
    <Container>
      <Clock />
      <Content>
        <HomeScheduleList scheduleList={todaysSchedules} />
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
