import { styled } from 'styled-components';
import { stringToDayjs, dayjsToString, updateTime } from '@utils/myDayjsUtil';
import { useState } from 'react';

const TIME_FORMAT = 'A h시 m분';

export default function TimePicker({ value: formTime, onChange, ...props }) {
  const [inputValue, setInputValue] = useState(
    dayjsToString(formTime, TIME_FORMAT),
  );

  function handleChange(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
  }

  function handleBlur(e) {
    const newValue = stringToDayjs(e.target.value);
    setInputValue(dayjsToString(newValue, TIME_FORMAT));
    onChange(updateTime(formTime, newValue));
  }

  return (
    <Input
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={inputValue}
      {...props}
    />
  );
}

const Input = styled.input`
  padding-left: 0.75rem;
  font-size: 1rem;
  font-family: 'NanumGothic';
`;
