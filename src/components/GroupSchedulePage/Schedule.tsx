import { FC } from 'react';
import { Dayjs } from 'dayjs';

interface Props {
  title: string;
  description: string;
  time: Dayjs;
  color: string;
  alarm?: string;
}

export default function Schedule({ title, description, time, color, alarm }: Props) {
  return <></>;
}
