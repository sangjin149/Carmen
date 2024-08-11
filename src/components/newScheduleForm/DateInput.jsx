import { styled } from "styled-components";

import { DatePicker } from "antd";

export default function DateInput(params) {
    return (
        <DatePicker
            showTime={{ format: "YY-MM-DD HH:mm" }}
            format="YY-MM-DD HH:mm"
            onChange={(value, dateString) => {
                console.log("Selected Time: ", value);
                console.log("Formatted Selected Time: ", dateString);
            }}
            style={InputStyle}
            variant="borderless"
            size="large"
        />
    );
}

const InputStyle = {
    padding: 0,
};
