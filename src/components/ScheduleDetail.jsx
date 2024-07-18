import { styled } from "styled-components";

export default function ScheduleDetail() {
    return (
        <Container>
            <Title>일정 제목</Title>
            <Time>17:00 ~ 18:00</Time>
            <Location>경기도 갑을시 병정구 무기대로 경신동</Location>
            <Alarm>추후 구현 예정</Alarm>
            <Details>
                대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일
                이내에 후임자를 선거한다. 대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다.
                국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에
                의하여 보장한다. 국회의원이 회기전에 체포 또이하는 스크롤 처리하기 대통령이 궐위된 때 또는 대통령
                당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다. 대법원장과
                대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다. 국가는 건전한 소비행위를 계도하고
                생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다. 국회의원이
                회기전에 체포 또이하는 스크롤 처리하기
            </Details>
        </Container>
    );
}

const Container = styled.article`
    width: 310px;
    padding: 8px;
    padding-left: 0px;

    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Title = styled.h3`
    margin: 0px;
    font-size: 14px;
`;

const Time = styled.div`
    font-size: 12px;
`;

const Location = styled.div`
    font-size: 12px;
`;

const Alarm = styled.div`
    font-size: 12px;
`;

const Details = styled.div`
    font-size: 10px;
    line-break: anywhere;
`;
