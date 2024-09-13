import ScheduleBox from './ScheduleBox';
import { useEffect } from 'react';

export default function ScheduleBoxList({ scheduleListPromise, onGetList }) {
  const list = scheduleListPromise.data.read();
  useEffect(() => {
    onGetList(list);
  }, [list, onGetList]);

  return (
    <>
      {list.map((schedule) => (
        <ScheduleBox schedule={schedule} key={schedule.id} />
      ))}
    </>
  );
}
