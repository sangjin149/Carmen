import { DatePicker as AntdDatePicker } from "antd";
import { updateDate } from "@utils/myDayjsUtil";

export default function DatePicker({ value: formDate, onChange, ...props }) {
    function handleChange(pickedDate) {
        //Ant design onChange 콜백은 event 가 아니라 value, formattedValue를 인자로 받음
        const newValue = updateDate(formDate, pickedDate);
        onChange(newValue);
    }

    return (
        <AntdDatePicker
            format="YY년 MM월 DD일"
            value={formDate}
            onChange={handleChange}
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
