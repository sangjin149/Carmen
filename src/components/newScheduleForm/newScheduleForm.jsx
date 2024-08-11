import { styled } from "styled-components";
import { useForm } from "@hooks";
import Button from "@ui/Button";
import { DateInput, OptionLabel } from "./";

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
        initialValue: "2024년 4월 18일",
        validation: (newValue) => "",
    },
    alarm: {
        initialValue: "1시간 전",
        validation: (newValue) => "",
    },
};

function dummySubmit(formResult) {
    console.table(formResult);
}

export default function NewScheduleForm() {
    const { inputValues, errors, onInputValueChange, onSubmit } = useForm(inputInfo, dummySubmit);
    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
    }

    return (
        <FakeCon>
            <Container>
                <TitleInput
                    placeholder="제목을 입력해주세요"
                    onChange={(e) => {
                        onInputValueChange("title", e.target.value);
                    }}
                />
                <OptionList>
                    <OptionLabel optionType="time">
                        <DateInput />
                    </OptionLabel>
                    <OptionLabel optionType="alarm">
                        <AdditionalInfoInput
                            placeholder="현재 알람 없음"
                            onChange={(e) => {
                                onInputValueChange("alarm", e.target.value);
                            }}
                        />
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

const FakeCon = styled.form`
    width: 560px;
`;

const Container = styled.div`
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

const AdditionalInfoInput = styled.input`
    flex-grow: 1;
    border: none;
    font-size: 1rem;
`;

const DescriptionInput = styled.textarea`
    height: fit-content;
    resize: none;
    max-height: 52rem;
    width: 100%;
    border: none;
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
