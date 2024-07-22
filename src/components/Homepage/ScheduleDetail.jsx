import { styled } from "styled-components";
import { ScheduleTime, ScheduleLocation, ScheduleAlarm } from "@icons";

import Svg from "@ui/Svg";

export default function ScheduleDetail({ content, isFolded }) {
    return (
        <Container>
            <Title>{content.title}</Title>
            <Time>
                <Svg src={ScheduleTime} alt="time icon" containerStyle={ClockStyle} center />
                {content.time}
            </Time>
            <Location>
                <Svg src={ScheduleLocation} alt="location icon" containerStyle={LocationStyle} />
                {content.location}
            </Location>
            <Alarm>
                <Svg src={ScheduleAlarm} alt="alarm icon" containerStyle={AlarmStyle} />
                추후 구현 예정
            </Alarm>
            {!isFolded && <Description>{content.description}</Description>}
        </Container>
    );
}

const Container = styled.article`
    width: 310px;
    padding: 0.5rem 0;

    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    height: 1.5rem;
    margin: 0px;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5rem;
    font-family: "NanumSquareB";
`;

const Details = styled.div`
    height: 1.5rem;
    margin-bottom: 0.25rem;
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
    paddingTop: "0.25rem",
    paddingLeft: "1px",
};

const LocationStyle = {
    ...IconContainerStyle,
    paddingTop: "0.25rem",
    paddingLeft: "2px",
};

const AlarmStyle = {
    ...IconContainerStyle,
    paddingTop: "0.25rem",
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
