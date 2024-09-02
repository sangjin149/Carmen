import { addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { db, userRef, groupRef, scheduleRef } from '@/firebase.js';
import dayjs from 'dayjs';

export async function postNewSchedule(newScheduleInfo) {
  try {
    const newSchedule = {
      ...newScheduleInfo,
      time: newScheduleInfo.time.toDate(),
      createdAt: serverTimestamp(),
    };
    await addDoc(scheduleRef, newSchedule);
    return console.log('post sucessful');
  } catch (e) {
    console.error(`Error during new schedule post: ${e}`);
  }
}

export async function getTodaysSchedules() {
  let today = dayjs().set('hour', 0).set('minute', 0).set('second', 0);
  let tomorrow = today.add(1, 'day');

  today = today.toDate();
  tomorrow = tomorrow.toDate();

  try {
    const result = [];

    const q = query(scheduleRef, where('time', '>=', today), where('time', '<', tomorrow));
    const todaysScheduleSnapshot = await getDocs(q);
    todaysScheduleSnapshot.forEach((doc) => {
      const schedule = doc.data();
      result.push({
        ...schedule,
        time: dayjs(schedule.time.toDate()),
        id: doc.id,
      });
    });
    return result;
  } catch (e) {
    console.error(`Error during fetching today's schedule: ${e}`);
  }
}
