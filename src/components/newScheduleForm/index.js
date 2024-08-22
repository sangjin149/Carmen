import { styled } from "styled-components";
import dayjs from "dayjs";
import { useForm } from "@hooks";
import { DropDown, Button } from "@ui";

import OptionLabel from "./OptionLabel";
import TimePicker from "./ScheduleTimePicker";
import Description from "./ScheduleDescription";
import GroupInputItem from "./GroupInputItem";

// issue #10
//TODO: value 제어 추가
//TODO: 필수 입력 추가
//TODO: 입력 오류시 메시지 표시 추가
//TODO: 스켈레톤 추가
//TODO: 애니메이션 추가
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
};

export default function NewScheduleForm({ onSubmit: submitAPI = DUMMY_DATA.dummySubmit, ...props }) {
    const { inputValues, onInputValueChange, onSubmit } = useForm(formValueInfo, submitAPI);

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
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

    return (
        <FakeCon>
            <Container onSubmit={(e) => e.preventDefault()}>
                <TitleInput
                    value={inputValues.title}
                    placeholder="제목을 입력해주세요"
                    onChange={generateChangeHandler("title")}
                />
                <ScheduleOptions>
                    <OptionLabel optionType="group">
                        <DropDown
                            value={inputValues.group}
                            itemList={groupInputItemList}
                            onChange={generateChangeHandler("group")}
                            placeholder="그룹"
                        />
                    </OptionLabel>
                    <OptionLabel optionType="time">
                        <TimePicker value={inputValues.time} onChange={generateChangeHandler("time")} />
                    </OptionLabel>
                    <OptionLabel optionType="alarm">
                        <DropDown
                            value={inputValues.alarm}
                            itemList={alarmList}
                            onChange={generateChangeHandler("alarm")}
                            placeholder="알람"
                        />
                    </OptionLabel>
                    <OptionLabel optionType="add"></OptionLabel>
                </ScheduleOptions>
                <Description placeholder="일정 설명..." />
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
