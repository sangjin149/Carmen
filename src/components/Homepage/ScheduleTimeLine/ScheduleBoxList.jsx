import ScheduleBox from './ScheduleBox';

export default function ScheduleBoxList({ scheduleListPromise }) {
  const list = scheduleListPromise.data.read();

  return (
    <>
      {list.map((schedule) => (
        <ScheduleBox schedule={schedule} key={schedule.id} />
      ))}
    </>
  );
}
