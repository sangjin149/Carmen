import { styled } from "styled-components";
import { stringToDayjs, dayjsToString } from "@utils/srtingToDayjs";
import { useState } from "react";
import dayjs from "dayjs";

const FORMAT = "A h시 m분";

export default function TimePicker(params) {
    const [value, setValue] = useState(dayjsToString(dayjs(), FORMAT));

    function handleChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
    }

    function handleBlur(e) {
        const newValue = stringToDayjs(e.target.value);
        setValue(dayjsToString(newValue, FORMAT).format(FORMAT));
    }

    return <Input type="text" onChange={handleChange} onBlur={handleBlur} value={value} />;
}

const Input = styled.input`
    padding-left: 0.75rem;
    font-size: 1rem;
    font-family: "NanumGothic";
`;
