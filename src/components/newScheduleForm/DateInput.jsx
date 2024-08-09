import { styled } from "styled-components";

import { DatePicker } from "antd";

export default function DateInput(params) {
    const onOk = (value) => {
        console.log("onOk: ", value);
    };

    return (
        <DatePicker
            showTime
            onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
            }}
            onOk={onOk}
        />
    );
}
