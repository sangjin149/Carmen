import { styled } from "styled-components";

import { DatePicker } from "antd";

export default function DateInput(params) {
    //TODO: 키보드 입력 거름망
    //TODO: 날짜 최대 최소 설정
    //TODO: Form과 연결(param 설정)
    //TODO: Label 클릭시 다시 열리는 현상 수정
    //TODO: enter 입력시 제출하는 현상 수정

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
            inputReadOnly={true}
        />
    );
}

const InputStyle = {
    padding: 0,
};
