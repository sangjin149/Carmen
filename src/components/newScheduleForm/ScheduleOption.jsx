import { styled } from "styled-components";
import { DropDown, Icon } from "@ui";
import { ScheduleTime, ScheduleAlarm, SidebarAddSchedule, Draft } from "@icons";
import ScheduleTimePicker from "./ScheduleTimePicker";

const LABELS = {
    time: {
        src: ScheduleTime,
        alt: "clock icon",
        text: "시간",
    },
    alarm: {
        src: ScheduleAlarm,
        alt: "alarm icon",
        text: "알람",
    },
    add: {
        src: SidebarAddSchedule,
        alt: "add icon",
        text: "속성 추가...",
    },
    group: {
        src: Draft,
        alt: "group icon",
        text: "분류",
    },
};

const InputMap = {
    group: DropDown,
    time: ScheduleTimePicker,
    alarm: DropDown,
};

export default function ScheduleOption({ optionType, isRequired, ...props }) {
    const { src, alt, text } = LABELS[optionType];

    const Input = InputMap[optionType];

    return (
        <Container>
            <Label>
                <LabelIcon src={src} alt={alt} containerWidth={24} containerHeight={24} />
                <LabelName>
                    {text} {isRequired && <span className="required-mark">*</span>}
                </LabelName>
            </Label>
            <Input {...props} />
        </Container>
    );
}

const Container = styled.label`
    height: 1.5rem;
    display: flex;
    align-items: center;
`;

const Label = styled.div`
    display: flex;
    align-items: center;
`;

const LabelName = styled.div`
    width: 7rem;
    padding-left: 4px;
    font-size: 1rem;
    line-height: 1.125rem;
    .required-mark {
        color: red;
    }
`;

const LabelIcon = styled(Icon)`
    fill: #adadad;
    width: 18px;
    height: 18px;
`;
