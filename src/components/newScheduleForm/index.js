import { styled } from "styled-components";
import dayjs from "dayjs";
import { useForm } from "@hooks";
import { Button, Icon } from "@ui";
import { SidebarAddSchedule } from "@icons";

import Description from "./ScheduleDescription";
import GroupInputItem from "./GroupInputItem";
import ScheduleOption from "./ScheduleOption";

// issue #10
//TODO: description 폼 필드에 추가
//TODO: 필수 입력 추가
//TODO: 입력 오류시 메시지 표시 추가
//TODO: 스켈레톤 추가
//TODO: 애니메이션 추가
// -ScheduleForm 호출
// -오류 항목 한번 반짝임
// -드롭다운 켜고 닫는거
//TODO: API 추가
// issue #6
//BUG: label마다 id 추가

const DUMMY_DATA = {
    alarmList: [
        { key: "1 minute", value: "1 minute", description: "1분 전" },
        { key: "5 minute", value: "5 minute", description: "5분 전" },
        { key: "10 minute", value: "10 minute", description: "10분 전" },
        { key: "1 hour", value: "1 hour", description: "한시간 전" },
        { key: "1 day", value: "1 day", description: "하루 전" },
    ],
    groupList: [
        { name: "그룹 1", id: "group1" },
        { name: "그룹 2", id: "group2" },
        { name: "그룹 3", id: "group3" },
    ],
    dummySubmit(formResult) {
        console.table(formResult);
    },
};

const formValueInfo = {
    title: {
        defaultValue: "",
        validation: (newValue) => {
            let errorMessage = "";
            if (newValue.length < 1) return "제목을 입력해주세요!";
            return errorMessage;
        },
    },
    group: {
        defaultValue: "",
        validation: (newValue) => "",
    },
    time: {
        defaultValue: dayjs(),
        validation: (newValue) => "",
    },
    alarm: {
        defaultValue: "",
        validation: (newValue) => "",
    },
    description: {
        defaultValue: "",
        validation: (newValue) => "",
    },
};

export default function NewScheduleForm({ onSubmit: submitAPI = DUMMY_DATA.dummySubmit, ...props }) {
    const { inputValues, errors, onInputValueChange, onSubmit } = useForm(formValueInfo, submitAPI);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(inputValues);
    }

    function generateChangeHandler(key) {
        return (newValue) => onInputValueChange(key, newValue);
    }

    const { alarmList, groupList } = DUMMY_DATA;

    const groupInputItemList = groupList.map(({ name, id }) => ({
        key: name,
        value: id,
        description: <GroupInputItem name={name} groupColor="#03C75A" />,
    }));

    const errorMessages = [];
    for (const formItemName in errors) {
        const errorMessage = `* ${formItemName}: ${errors[formItemName]}`;
        if (errorMessage.length > 0) errorMessages.push();
    }

    return (
        <FakeCon>
            <Container onSubmit={(e) => e.preventDefault()}>
                <TitleInput
                    value={inputValues.title}
                    placeholder="제목을 입력해주세요"
                    onChange={(e) => onInputValueChange("title", e.target.value)}
                />
                <ScheduleOptions>
                    <ScheduleOption
                        optionType="group"
                        value={inputValues.group}
                        onChange={generateChangeHandler("group")}
                        itemList={groupInputItemList}
                        placeholder="그룹"
                    />
                    <ScheduleOption
                        optionType="time"
                        value={inputValues.time}
                        onChange={generateChangeHandler("time")}
                    />
                    <ScheduleOption
                        optionType="alarm"
                        value={inputValues.alarm}
                        onChange={generateChangeHandler("alarm")}
                        itemList={alarmList}
                        placeholder="알람"
                    />
                    <AddOption.Container>
                        <AddOption.Icon
                            src={SidebarAddSchedule}
                            alt="속성 추가"
                            containerWidth={24}
                            containerHeight={24}
                        />
                        <AddOption.Desc>속성 추가...</AddOption.Desc>
                    </AddOption.Container>
                    <ErrorMessage>
                        {errorMessages.map((errorMessage) => (
                            <div className="error-message">{errorMessage}</div>
                        ))}
                    </ErrorMessage>
                </ScheduleOptions>
                <Description
                    value={inputValues.description}
                    onChange={(e) => onInputValueChange("description", e.target.value)}
                    placeholder="일정 설명..."
                />
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

const ScheduleOptions = styled.div`
    padding: 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const AddOption = {
    Container: styled(Button)`
        height: 1.5rem;
        display: flex;
        align-items: center;
    `,
    Desc: styled.div`
        width: 7rem;
        padding-left: 4px;
        font-size: 1rem;
        line-height: 1.125rem;
        text-align: start;
        font-family: "NanumGothic";
    `,
    Icon: styled(Icon)`
        fill: #adadad;
        width: 18px;
        height: 18px;
    `,
};

const Control = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
`;

const CancelButton = styled(Button)`
    width: 4rem;
    height: 2rem;
`;

const ConfirmButton = styled(Button)`
    width: 4rem;
    height: 2rem;

    border-radius: 0.25rem;
    background-color: black;
    color: white;
`;

const ErrorMessage = styled.div`
    display: flex;
    flex-direction: column;
    & .error-message {
        color: red;
        font-size: 14px;
    }
`;
