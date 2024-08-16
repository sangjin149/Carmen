import { styled } from "styled-components";
import { useForm } from "@hooks";
import Button from "@ui/Button";
import OptionLabel from "./OptionLabel";
import DateTimePicker from "./DateTimePicker";
import DescriptionInput from "./DescriptionInput";
import { DropDown } from "@ui";
import dayjs from "dayjs";

const inputInfo = {
    //TODO: isRequired 추가
    title: {
        initialValue: "",
        validation: (newValue) => {
            let errorMessage = "";
            if (newValue.length < 1) return "제목을 입력해주세요!";
            return errorMessage;
        },
    },
    time: {
        initialValue: dayjs(),
        validation: (newValue) => "",
    },
    alarm: {
        initialValue: "1시간 전",
        validation: (newValue) => "",
    },
};

const alarmList = [
    { key: "1 minute", value: "1 minute", description: "1분 전" },
    { key: "5 minute", value: "5 minute", description: "5분 전" },
    { key: "10 minute", value: "10 minute", description: "10분 전" },
    { key: "1 hour", value: "1 hour", description: "한시간 전" },
    { key: "1 day", value: "1 day", description: "하루 전" },
];

function dummySubmit(formResult) {
    console.table(formResult);
}

export default function NewScheduleForm() {
    const { inputValues, onInputValueChange, onSubmit } = useForm(inputInfo, dummySubmit);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    function generateChageHandler(key) {
        return (newValue) => onInputValueChange(key, newValue);
    }

    return (
        <FakeCon>
            <Container onSubmit={(e) => e.preventDefault()}>
                <TitleInput placeholder="제목을 입력해주세요" onChange={generateChageHandler("title")} />
                <OptionList>
                    <OptionLabel optionType="time">
                        <DateTimePicker value={inputValues.time} onChange={generateChageHandler("time")} />
                    </OptionLabel>
                    <OptionLabel optionType="alarm">
                        <DropDown itemList={alarmList} onChange={generateChageHandler("alarm")} />
                    </OptionLabel>
                    <OptionLabel optionType="add"></OptionLabel>
                </OptionList>
                <DescriptionInput placeholder="일정 설명..." />
                <Control>
                    <CancelButton>취소</CancelButton>
                    <ConfirmButton onClick={handleSubmit}>분류</ConfirmButton>
                </Control>
            </Container>
        </FakeCon>
    );
}

const FakeCon = styled.div`
    width: 560px;
`;

const Container = styled.form`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const TitleInput = styled.input`
    height: 36px;
    border: none;
    font-size: 20px;
    font-weight: 900;
`;

const OptionList = styled.div`
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Control = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
`;

const CancelButton = styled(Button)``;

const ConfirmButton = styled(Button)`
    color: "#909090";
`;
