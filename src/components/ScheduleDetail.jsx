import { styled } from "styled-components";
import { ScheduleTime, ScheduleLocation, ScheduleAlarm } from "@icons";

import Svg from "@ui/Svg";

export default function ScheduleDetail() {
    return (
        <Container>
            <Title>일정 제목</Title>
            <Time>
                <Svg src={ScheduleTime} alt="time icon" containerStyle={ClockStyle} center />
                17:00 ~ 18:00
            </Time>
            <Location>
                <Svg src={ScheduleLocation} alt="location icon" containerStyle={LocationStyle} />
                경기도 갑을시 병정구 무기대로 경신동
            </Location>
            <Alarm>
                <Svg src={ScheduleAlarm} alt="alarm icon" containerStyle={AlarmStyle} />
                추후 구현 예정
            </Alarm>
            <Description>본문 글자 크기 16pt 목표로 모든 디자인 수정하기 가능할까...</Description>
        </Container>
    );
}

const Container = styled.article`
    width: 310px;
    padding-top: 0.5rem;

    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    height: 1.5rem;
    margin: 0px;
    margin-bottom: 4px;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-family: "NanumSquareB";
`;

const Details = styled.div`
    height: 1.5rem;
    margin-top: 4px;
    display: flex;
    font-size: 0.875rem;
    line-height: 1.5rem;
`;

const Time = styled(Details)``;

const Location = styled(Details)``;

const Alarm = styled(Details)``;

const IconContainerStyle = {
    width: "1.5rem",
    height: "1.5rem",
};

const ClockStyle = {
    ...IconContainerStyle,
    paddingTop: "4px",
    paddingLeft: "1px",
};

const LocationStyle = {
    ...IconContainerStyle,
    paddingTop: "4px",
    paddingLeft: "2px",
};

const AlarmStyle = {
    ...IconContainerStyle,
    paddingTop: "4px",
};

const Description = styled.div`
    margin-top: 0.8rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    font-family: "NanumGothicLight";
    font-size: 0.8rem;
    line-break: anywhere;
    word-spacing: 2px;
    line-height: 1.4;
`;
