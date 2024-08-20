import { styled } from "styled-components";
import { Icon } from "@ui";
import { ScheduleTime, ScheduleAlarm, SidebarAddSchedule, Draft } from "@icons";

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

export default function OptionLabel({ optionType, children }) {
    const { src, alt, text } = LABELS[optionType];

    return (
        <Container>
            <LabelIcon src={src} alt={alt} containerWidth={24} containerHeight={24} />
            <AdditionalInfoLabel>{text}</AdditionalInfoLabel>
            {children}
        </Container>
    );
}

const Container = styled.label`
    height: 1.5rem;
    display: flex;
    align-items: center;
`;

const AdditionalInfoLabel = styled.div`
    width: 7rem;
    padding-left: 4px;
    font-size: 1rem;
    line-height: 1.125rem;
`;

const LabelIcon = styled(Icon)`
    fill: #adadad;
    width: 18px;
    height: 18px;
`;
