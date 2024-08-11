import { DatePicker } from "antd";

export default function DateInput(params) {
    //TODO: 키보드 입력 거름망
    //TODO: 날짜 최대 최소 설정
    //TODO: Form과 연결(param 설정)
    //TODO: Label 클릭시 다시 열리는 현상 수정
    //TODO: enter 입력시 제출하는 현상 수정
    //TODO: 시간 입력칸을 키보드 입력으로 받기

    return (
        <DatePicker
            format="YY년 MM월 DD일 H시 m분"
            showTime={{ format: "YY/MM/DD H시 m분" }}
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
    width: "12.75rem",
    padding: 0,
};
