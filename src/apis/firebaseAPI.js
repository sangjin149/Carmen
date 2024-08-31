import { addDoc, serverTimestamp } from 'firebase/firestore';
import { db, userRef, groupRef, scheduleRef } from '@/firebase.js';

export async function postNewSchedule(newScheduleInfo) {
  try {
    const newSchedule = {
      ...newScheduleInfo,
      time: newScheduleInfo.time.toJSON(),
      createdAt: serverTimestamp(),
    };
    await addDoc(scheduleRef, newSchedule);
    return console.log('post sucessful');
  } catch (e) {
    console.error(`Error during new schedule post: ${e}`);
  }
}
