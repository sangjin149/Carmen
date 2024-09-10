import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function useCurrentTime() {
  const [time, setTime] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
}
