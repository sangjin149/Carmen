import { DatePicker } from "antd";

//TODO: 시간 따로 날짜 따로 입력하기
//TODO: 키보드 입력 거름망

export default function DateInput({ onChange, ...props }) {
    //TODO: Form과 연결(param 설정)
    //TODO: Label 클릭시 다시 열리는 현상 수정
    //TODO: enter 입력시 제출하는 현상 수정

    return (
        <DatePicker
            format="YY년 MM월 DD일"
            onChange={(newValue) => {
                onChange(newValue);
            }}
            style={InputStyle}
            variant="borderless"
            size="large"
            inputReadOnly
            {...props}
        />
    );
}

const InputStyle = {
    width: "8.5rem",
    padding: 0,
};
