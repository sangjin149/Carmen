import { styled } from "styled-components";
import Svg from "@ui/Svg";
import { ScheduleTime, ScheduleAlarm, SidebarAddSchedule } from "@icons";

export default function NewScheduleForm() {
  return (
    <FakeCon>
      <Container>
        <TitleInput placeholder="제목을 입력해주세요" />
        <AdditionalInfos>
          <AdditionalInfo>
            <Svg
              src={ScheduleTime}
              alt="clock icon"
              style={IconStyle}
              containerStyle={IconContaierStyle}
              width={16}
              height={16}
              center
            />
            <AdditionalInfoLabel>시간</AdditionalInfoLabel>
            <AdditionalInfoInput placeholder="2024년 4월 18일" />
          </AdditionalInfo>
          <AdditionalInfo>
            <Svg
              src={ScheduleAlarm}
              alt="alarm icon"
              style={IconStyle}
              containerStyle={IconContaierStyle}
              width={16}
              height={16}
              center
            />
            <AdditionalInfoLabel>알람</AdditionalInfoLabel>
            <AdditionalInfoInput placeholder="현재 알람 없음" />
          </AdditionalInfo>
          <AdditionalInfo>
            <Svg
              src={SidebarAddSchedule}
              alt="clock icon"
              style={IconStyle}
              containerStyle={IconContaierStyle}
              width={14}
              height={14}
              center
            />
            <AdditionalInfoLabel>시간</AdditionalInfoLabel>
          </AdditionalInfo>
        </AdditionalInfos>
      </Container>
    </FakeCon>
  );
}

const FakeCon = styled.div`
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

const AdditionalInfos = styled.div`
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const AdditionalInfo = styled.label`
  height: 24px;
  display: flex;
  align-items: center;
`;

const IconContaierStyle = {
  width: "21px",
  height: "24px",
  display: "flex",
};

const IconStyle = {
  width: "1rem",
  height: "1rem",
};

const AdditionalInfoLabel = styled.div`
  width: 7rem;
  padding-left: 4px;
  font-size: 1rem;
  line-height: 1.125rem;
`;

const AdditionalInfoInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 1rem;
`;
