import { styled } from "styled-components";
import stringToDayjs from "@utils/srtingToDayjs";
import { useState } from "react";
import dayjs from "dayjs";

const FORMAT = "HH시 mm분";

export default function TimeInput(params) {
    const [value, setValue] = useState(dayjs().format(FORMAT));

    function handleChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
    }

    function handleBlur(e) {
        const newValue = e.target.value;
        setValue(stringToDayjs(newValue).format(FORMAT));
    }

    return <Input type="text" onChange={handleChange} onBlur={handleBlur} value={value} placeholder="00시 00분" />;
}

const Input = styled.input`
    padding-left: 0.75rem;
    font-size: 1rem;
    font-family: "NanumGothic";
`;
